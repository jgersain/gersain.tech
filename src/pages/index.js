import React from "react"

import BaseLayout from "../layouts/BaseLayout"
import SEO from "../components/seo"
import Resume from '../../content/CV_2019.pdf'

const IndexPage = () => (
  <BaseLayout>
    <SEO title="José Gersain" />
    <a className="bg-transparent hover:bg-teal-600 text-orange-300 hover:text-gray-800 border border-orange-300 hover:border-transparent py-2 px-4 inline-flex items-center rounded" href={Resume} target="_blank">
      <span className="font-poppins text-xl">Resume</span>
    </a>
  </BaseLayout>
)

export default IndexPage
