/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../partials/Header'
import Footer from '../partials/Footer'

const BaseLayout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="grid grid-rows-3 grid-cols-12 h-screen">
      <Header siteTitle={site.siteMetadata.title} />
      <main className="row-auto col-span-12 bg-green-600">
        {children}
      </main>
      <Footer />
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default BaseLayout