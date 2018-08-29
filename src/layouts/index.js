import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container } from 'reactstrap'

import './scss/main.scss'
const DefaultLayout = ({ children }) => (
  <div>
    <Helmet
      title={'EadsGraphic'}
      meta={[
        { name: 'description', content: 'Home Sample' },
        { name: 'keywords', content: 'Home description' },
      ]}
    />
    <div className="grid-container">
      <div className="grid-header">
        <Header />
      </div>

      <div className="grid-main">
        <main>
          <Container>{children()}</Container>
        </main>
      </div>

      <div className="grid-footer">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout
