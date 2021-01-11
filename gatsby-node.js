const locales = require('./config/i18n')
const path = require('path')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const {
  replaceTrailing,
  replaceBoth,
  wrapper,
} = require('./src/utils/gatsby-node-helpers')

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.node = {
    fs: 'empty',
  }
}

// Take the pages from src/pages and generate pages for all locales, e.g. /index and /en/index
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the pages so we can re-create them
  deletePage(page)

  Object.keys(locales).map((lang) => {
    // Remove the trailing slash from the path, e.g. --> /categories
    page.path = replaceTrailing(page.path)

    // Remove the leading AND traling slash from path, e.g. --> categories
    const name = replaceBoth(page.path)

    // Create the "slugs" for the pages. Unless default language, add prefix àla "/en"
    const localizedPath =
      locales[lang] && locales[lang].default
        ? page.path
        : `${locales[lang].path}${page.path}`

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        locale: lang,
        name,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        allGhostPost {
          edges {
            node {
              slug
              tags {
                slug
              }
            }
          }
        }
      }
    `)
  )

  Object.keys(locales).map((lang) => {
    // Remove the trailing slash from the path, e.g. --> /categories
    const posts = result.data.allGhostPost.edges

    // Load templates
    const postTemplate = path.resolve(`./src/templates/post.js`)

    posts.forEach(({ node }) => {
      node.url = `/${node.slug}/`
      const localizedPath =
        locales[lang].path === 'en'
          ? node.url
          : `${locales[lang].path}${node.url}`

      createPage({
        path: localizedPath,
        component: postTemplate,
        context: {
          tags: node.tags,
          locale: lang,
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
    })
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  store,
  createNodeId,
  cache,
}) => {
  // Check that we are modifying right node types.
  const nodeTypes = [`GhostPost`]
  if (!nodeTypes.includes(node.internal.type)) {
    return
  }

  const { createNode } = actions

  if (node.feature_image != null) {
    // Download image and create a File node with gatsby-transformer-sharp.
    const fileNode = await createRemoteFileNode({
      url: node.feature_image,
      store,
      cache,
      createNode,
      parentNodeId: node.id,
      createNodeId,
    })

    if (fileNode) {
      // Link File node to GhostPost node at field image.
      node.localFeatureImage___NODE = fileNode.id
    }
  }
}
