import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import About from "../components/about"
import Services from "../components/services"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Hero>
      <Banner 
        title="Keep Exploring" 
        info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, obcaecati numquam! Repellendus sit rem.'
      >
        <Link 
          to='/tours'
          className='btn-white'
        >
          explore tours
        </Link>
      </Banner>
    </Hero>

    <About />
    <Services />
  </Layout>
)

export default IndexPage
