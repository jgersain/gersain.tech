import React from 'react'

export default () => (
  <footer className="col-span-12 bg-gray-900 text-gray-600 py-10 text-center">
    <div className="flex justify-center py-2">
      <a className="text-teal-600 hover:text-orange-200 p-3" target="_blank" href="https://github.com/jgersain" aria-label="GitHub">
        <span className="icon-github text-4xl" />
      </a>
      <a className="text-teal-600 hover:text-orange-200 p-3" target="_blank" href="https://www.linkedin.com/in/gersain/" aria-label="Linkedin">
        <span className="icon-linkedin text-4xl" />
      </a>
      <a className="text-teal-600 hover:text-orange-200 p-3" target="_blank" href="https://twitter.com/jhersein" aria-label="Twitter">
        <span className="icon-twitter text-4xl" />
      </a>
    </div>
    
    <p className="my-2 tracking-widest text-orange-200">
      Built with {` `}
      <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
      {` & `}
      <a href="https://tailwindcss.com/" target="_blank">Tailwindcss</a>
    </p>
    © {new Date().getFullYear()} ― José Gersain
  </footer>
)