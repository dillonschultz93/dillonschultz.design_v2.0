import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import Card from '../components/Card';
import SEO from '../components/SEO';

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query Posts {
      allSanityPosts {
        nodes {
          _updatedAt
          title
          slug {
            current
          }
          postContent {
            style
            children {
              text
            }
          }
          publishedDate
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Blog" />
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
          <h1 className="font-bold mt-12 mb-4">Blog</h1>
          <p>
            Welcome to the blog. This is where I document my journey as a
            developer, career updates, interesting front end concepts, or the
            occasional tutorial.
          </p>
          {posts.allSanityPosts.nodes.map((post, index) => (
            <Card href={`./${post.slug.current}`} key={index}>
              <p className="text-gray-600 mb-4 uppercase text-small font-semibold">
                {/* {moment(post.publishedDate).format('MMMM Do, YYYY')} */}
                {post._updatedAt
                  ? `Last updated: ${moment(post._updatedAt).format(
                      'MMMM Do, YYYY'
                    )}`
                  : moment(post.publishedDate).format('MMMM Do, YYYY')}
              </p>
              <h2 className="font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4 truncate">
                {/* {post.postContent[0].children[0].text} */}
                {post.postContent[0].style === null
                  ? post.postContent[1].children[0].text
                  : post.postContent[0].children[0].text}
              </p>
              <p className="text-indigo-500 mb-0 font-bold hover:underline cursor-pointer inline-block">
                Read post →
              </p>
            </Card>
          ))}
        </div>
      </PageTransition>
    </>
  );
};

export default BlogPage;
