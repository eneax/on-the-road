import React from "react"
import { Link } from 'gatsby'

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
        <Link 
          to='/'
          className='btn-white'
        >
          Back to home page
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
