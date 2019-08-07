import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import styles from '../components/error.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    
    <header className={styles.error}>
      <Banner
        title="ooops...it's a dead end"
      >
        <AniLink 
          fade
          to='/'
          className='btn-white'
        >
          Back to home page
        </AniLink>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
