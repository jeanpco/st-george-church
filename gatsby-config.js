const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')
const prismicLinkResolver = require('./src/gatsby/linkResolver')

module.exports = {
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-page-transitions',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'saintgeorgeorthodoxchurch',
        accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        linkResolver: () => prismicLinkResolver,
        shouldDownloadImage: () => true,

        // PrismJS highlighting for labels and slices
        // htmlSerializer: () => prismicHtmlSerializer,
        schemas: {
          header: require('./src/schemas/header.json'),
          menu_links: require('./src/schemas/menu_links.json'),
          about: require('./src/schemas/about.json'),
          homepage: require('./src/schemas/homepage.json'),
          quote: require('./src/schemas/quote.json'),
          footer: require('./src/schemas/footer.json'),
        },
      },
    },
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
