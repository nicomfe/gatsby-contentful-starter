import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PageTemplate = ({ data }) => {
  const { title } = data.contentfulPage

  return (
    <Layout data={data}>
      {title}
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      ogTitle
      ogDescription
      ogKeywords
      ogImage {
        description
        file {
          url
          contentType
          details {
            size
            image {
              width
              height
            }
          }
        }
      }
      favIco {
        file {
          url
        }
      }
    }
  }
`

export default PageTemplate
