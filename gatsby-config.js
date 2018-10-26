const pixrem = require('pixrem')
const autoprefixer = require('autoprefixer')
const config = require('./deployhq.config')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: ['last 2 versions'],
          }),
        ],
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: config.CONTENTFUL_SPACE_ID,
        accessToken: config.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
