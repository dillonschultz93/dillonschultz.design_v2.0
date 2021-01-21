import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-page-transitions',
    'gatsby-plugin-react-helmet',
  ],
  siteMetadata: {
    title: 'Dillon Schultz',
    siteUrl: 'https://dillonschultz.design',
    description: 'A portfolio and blog site belonging to Dillon Schultz.',
    twitter: `@dill_schultz`,
    email: `hello@dillonschultz.design`,
  },
};
