import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header className="row-auto col-span-12 bg-blue-600">
    <h1 className="text-5xl">{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header