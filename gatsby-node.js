
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPages = new Promise((resolve) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      const pages = result.data.allContentfulPage.edges
      pages.forEach(({ node }) => {
        let templatePage = './src/templates/page.js'
        if (node.slug === '/') {
          templatePage = './src/templates/home.js'
        }
        createPage({
          path: node.slug,
          component: path.resolve(templatePage),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
  return Promise.all([loadPages])
}
