import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header className="col-span-12 py-24 text-center">
    <div className="font-poppins">
      <span className="text-gray-600">Hello, my name is</span>
      <h1 className="font-viga text-5xl text-gray-200">José Gersain</h1>
      <span className="text-3xl text-teal-600">{siteTitle}</span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header