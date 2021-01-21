import React from 'react';
import { graphql } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';
import moment from 'moment';
import BlockContent from '@sanity/block-content-to-react';
import { CodeBlock, dracula } from 'react-code-blocks';
import SEO from '../components/SEO';

export default function Post({ data }) {
  const link = (props) => (
    <a className="link" href={props.mark.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );

  const code = ({ node = {} }) => (
    <CodeBlock
      text={node.code}
      language={node.language}
      showLineNumbers
      wrapLine
      theme={dracula}
    />
  );

  return (
    <>
      <SEO title={data.post.title} />
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
        <section className="container border-b border-indigo-100 mb-8">
          <div className="pb-8 text-center">
            <h1 className="font-bold mb-6">{data.post.title}</h1>
            {data.post._updatedAt && (
              <p className="text-gray-400 mb-0">Last updated</p>
            )}
            <h5 className="mb-0 uppercase text-gray-700 font-semibold">
              {moment(data.post._updatedAt || data.post.publishedDate).format(
                'MMMM Do, YYYY'
              )}
            </h5>
          </div>
        </section>
        <section className="container">
          <BlockContent
            blocks={data.post._rawPostContent}
            imageOptions={{ w: 768, fit: 'max' }}
            serializers={{ marks: { link }, types: { code } }}
            className="rounded-lg"
          />
        </section>
      </PageTransition>
    </>
  );
}

export const postQuery = graphql`
  query($slug: String!) {
    post: sanityPosts(slug: { current: { eq: $slug } }) {
      title
      publishedDate
      _rawPostContent(resolveReferences: { maxDepth: 10 })
      _updatedAt
    }
  }
`;
