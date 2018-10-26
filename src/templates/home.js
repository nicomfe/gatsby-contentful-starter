import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const HomePage = ({ data }) => (
  <Layout data={data}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to='/contact'>Go to Contact Page</Link>
  </Layout>
)

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "/" }) {
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

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage
