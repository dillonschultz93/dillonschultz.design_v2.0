import React from 'react';
import Img from 'gatsby-image';
import PageTransition from 'gatsby-plugin-page-transitions';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "styled-portrait.jpg" }) {
        childrenImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="About" />
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
          <div className="grid grid-cols-2 gap-6 mb-16">
            <div className="md:col-span-1 col-span-2 flex flex-col justify-center">
              <h1 className="font-bold mb-0">About me</h1>
              <h5 className="text-lg font-semibold text-gray-500 mb-4">
                ( He / Him / His )
              </h5>
              <p>
                Hey, I'm Dillon, a front end developer and designer. I'm
                constantly searching for ways to integrate design and
                development.
              </p>
            </div>
            <div className="md:col-span-1 col-span-2 md:order-first order-last">
              <Img
                className="rounded-full"
                fluid={data.file.childrenImageSharp[0].fluid}
                alt="A styleized image of Dillon Schultz"
              />
            </div>
          </div>
          <h2 className="font-bold">Past, present, &amp; future</h2>
          <p>
            My career path into this industry isn't necessarily "traditional",
            but looking back I was bound to land here. I have a background in
            design and started that career as an editorial designer. Feeling
            unsatisfied with my work in that industry I transitioned into web
            development.
          </p>
          <p className="mb-12">
            I'm currently a junior developer at Proctorio, still learning and
            growing as a developer. My aspirations with my career are to work on
            large-scale design systems and component libraries.
          </p>
          <h2 className="font-bold">Technologies I’m interested in</h2>
          <p>
            Listed below are a few technologies and tools that I use regularly
            or just play around with and explore.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <ul className="list-inside list-disc">
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Storybook</li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul className="list-inside list-disc">
                <li>Web Components</li>
                <li>Node.js</li>
                <li>Swift</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default AboutPage;
