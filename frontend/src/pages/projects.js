import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import { graphql, useStaticQuery } from 'gatsby';
import Card from '../components/Card';
import SEO from '../components/SEO';

const ProjectsPage = () => {
  const projects = useStaticQuery(graphql`
    query Projects {
      allSanityProjects {
        nodes {
          title
          tags {
            tag
          }
          link
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Projects" />
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
          <h1 className="font-bold mt-12 mb-4">Projects</h1>
          <p>
            Here are a few projects that I'm proud of. I've included a mix of
            design and development projects in this list.
          </p>
          {projects.allSanityProjects.nodes.map((project, index) => (
            <Card outside href={project.link} key={index}>
              <p className="text-gray-600 mb-4 uppercase text-small font-semibold">
                {project.tags.map((tag, tagIndex) => {
                  if (tagIndex === project.tags.length - 1) {
                    return tag.tag;
                  }
                  return `${tag.tag} | `;
                })}
              </p>
              <h2 className="font-semibold mb-4">{project.title}</h2>
              <p className="text-indigo-500 mb-0 font-bold hover:underline cursor-pointer inline-block">
                See project →
              </p>
            </Card>
          ))}
        </div>
      </PageTransition>
    </>
  );
};

export default ProjectsPage;
