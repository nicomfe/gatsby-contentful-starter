import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const PageTemplate = ({ data }) => {
  const { title } = data.contentfulPage

  return (
    <div>
      {title}
    </div>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
    }
  }
`

export default PageTemplate
