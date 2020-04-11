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
    <div className="grid grid-rows-layout grid-cols-100 min-h-screen bg-gray-800">
      <Header siteTitle={site.siteMetadata.title} />
      <main className="col-span-12 text-center p-3">
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