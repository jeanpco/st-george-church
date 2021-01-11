const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')

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
          events_calendar: require('./src/schemas/events_calendar.json'),
          single_contact: require('./src/schemas/single_contact.json'),
          ministries_section_contact: require('./src/schemas/ministries_section_contact.json'),
        },
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        version: `v3`, // Ghost API version, optional, defaults to "v3".
        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      },
    },
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        // An array of node types and image fields per node
        // Image fields must contain a valid absolute path to the image to be downloaded
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostPage`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [`cover_image`],
          },
        ],
        // Additional condition to exclude nodes
        // Takes precedence over lookup
        // exclude: (node) => node.ghostId === undefined,
        // Additional information messages useful for debugging
        verbose: true,
        // Option to disable the module (default: false)
        disable: false,
      },
    },
    {
      resolve: `./gatsby-source-google-calendar-events`,
      options: {
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allGhostPost } }) => {
              return allGhostPost.edges.map((edge) => {
                return {
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  date: edge.node.created_at,
                  url: 'https://youth.saintgeorgemontreal.org/' + edge.node.slug,
                  guid: 'https://youth.saintgeorgemontreal.org/' + edge.node.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }
              })
            },
            query: `
            {
              allGhostPost(filter: {tags: {elemMatch: {slug: {eq: "orthoflash"}}}}) {
                edges {
                  node {
                    tags {
                      slug
                    }
                    slug
                    title
                    html
                    excerpt
                    feature_image
                    created_at
                  }
                }
              }
            }            
            `,
            output: '/rss.xml',
            title: 'St-George Orthoflash RSS Feed',
          },
        ],
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
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}
