import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import { graphql, useStaticQuery } from 'gatsby';
import Blob from '../components/Blob.js';
import Button from '../components/Button.js';
import SEO from '../components/SEO.js';

const HomePage = ({ location }) => {
  const site = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          email
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <PageTransition
        defaultStyle={{ transition: 'opacity 400ms ease-in-out', opactiy: 0 }}
        transitionStyles={{
          entering: { opacity: 0 },
          entered: { opacity: 1 },
          exiting: { opacity: 1 },
          exited: { opacity: 0 },
        }}
        transitionTime={400}
      >
        <div className="container">
          <section>
            <h1 className="text-large font-bold text-center">
              Hey, I'm Dillon!
            </h1>
            <p className="font-bold text-center">
              I’m a front end developer, designer, lifelong learner, and pizza
              enthusiast.
            </p>
          </section>
          <section className="my-6">
            <Blob />
          </section>
          <section className="flex md:flex-row flex-col items-center justify-center">
            <div className="m-4">
              <Button href="/about" type="primary">
                About me
              </Button>
            </div>
            <div className="m-4">
              <Button href="/projects" type="secondary">
                What I'm up to
              </Button>
            </div>
          </section>
        </div>
      </PageTransition>
    </>
  );
};

export default HomePage;
