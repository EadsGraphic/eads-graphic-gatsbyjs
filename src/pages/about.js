import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const AboutPage = () => (
  <div>
    <Helmet
      title={`EadsGraphic | About Us`}
      meta={[
        { name: 'description', content: 'About Sample' },
        { name: 'keywords', content: 'About description' },
      ]}
    />

    <h1>About</h1>
    <p>Welcome to page 2</p>
  </div>
)

export default AboutPage
