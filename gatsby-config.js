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
          ministries: require('./src/schemas/ministries.json'),
          photo_gallery: require('./src/schemas/photo_gallery.json'),
          who_we_are: require('./src/schemas/who_we_are.json'),
          contact_form: require('./src/schemas/contact_form.json'),
        },
      },
    },
    {
      resolve: `./gatsby-source-google-calendar-events`,
      options: {
        envVar: process.env.GOOGLE_CALENDAR_SERVICE_ACCOUNT_KEY,
        calendarId: 'jp@field-office.ca',
        assumedUser: 'jp@field-office.ca',
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
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
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
