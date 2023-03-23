import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Recent Steep Partridge</title>
        <meta property="og:title" content="Recent Steep Partridge" />
      </Helmet>
    </div>
  )
}

export default Home
