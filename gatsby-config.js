require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Kyrylo Orlov - Independent designer & developer`,
    description: `I am a passionate UI/UX designer and developer. I have a drive for building high quality user experiences, and working as a leader to deliver the best results.`,
    siteUrl: 'https://kyryloorlov.com',
    image: '/og.png',
    twitterUsername: '@kyryloren',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-D9JV9LM0MV'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1A1A1A`,
        theme_color: `#C9C5B6`,
        display: `minimal-ui`,
        icon: `src/images/me.png`,
      },
    },
  ],
};
