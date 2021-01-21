import React from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';

const FourOhFourPage = () => {
  const data = useStaticQuery(graphql`
    query Illustration {
      file(relativePath: { eq: "404-illustration.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <SEO title="404" />
      <div className="container grid grid-cols-2 gap-4">
        <div className="lg:col-span-1 col-span-2">
          <h1 className="text-jumbo">Yikes!</h1>
          <h1 className="text-gray-700">
            Looks like the page you're looking for doesn't exist.
          </h1>
          <Link to="/" className="link text-md block mb-6 w-max">
            Go to home
          </Link>
          <a
            role="link"
            tabIndex="0"
            className="link text-md block w-max"
            onClick={() => {
              navigate(-1);
            }}
            onKeyPress={() => {
              navigate(-1);
            }}
          >
            Go to previous page
          </a>
        </div>
        <div className="lg:col-span-1 col-span-2 flex items-center lg:order-last order-first lg:mb-0 mb-12 justify-center">
          <img src={data.file.publicURL} alt="" />
        </div>
      </div>
    </>
  );
};

export default FourOhFourPage;
