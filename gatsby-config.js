require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `On the Road`,
    description: `Experimenting with Gatsby and Contentful`,
    author: `@eneax`,
    twitterUsername: `@eneaxharja`,
    image: `/defaultBcg.jpeg`,
    siteUrl: `https://on-the-road.netlify.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    // for a nice page transition effect
    `gatsby-plugin-transition-link`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // robots-txt
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://on-the-road.netlify.com`,
        sitemap: `https://on-the-road.netlify.com/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
