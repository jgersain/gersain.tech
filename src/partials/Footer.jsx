import React from 'react'

export default () => (
  <footer className="row-auto col-span-12 bg-yellow-600">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)