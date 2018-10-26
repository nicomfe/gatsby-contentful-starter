import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { commonTags } from '../utils/seo'
import Button from './button'
import Header from './header'
import './layout.css'

const Layout = ({ data, children }) => {
  const { contentfulPage } = data
  const {
    ogTitle,
    ogKeywords,
    ogDescription,
    ogImage,
    favIco,
  } = contentfulPage
  return (
    <div>
      <Helmet
        title={ogTitle}
        meta={commonTags(ogTitle, ogDescription, ogKeywords, ogImage)}
      >
        <html lang='en' />
        <link rel='icon' type='image/png' href={favIco.file.url}  />
      </Helmet>
      <Header siteTitle={ogTitle} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children}
        <Button>Test SCSS</Button>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

export default Layout
