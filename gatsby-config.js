const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-page-transitions',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
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
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: [
          'headers',
          'footers',
          'medias',
          'abouts',
          'homes',
          'quotes',
          'anchors',
        ],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        },
        localMedia: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `saint-george-headless-website`,
        short_name: `Saint George Church`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    `gatsby-plugin-eslint`,
    'gatsby-plugin-offline',
  ],
}
