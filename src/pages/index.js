import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStyled from "../components/heroStyled"
import Banner from "../components/banner"
import About from "../components/about"
import Services from "../components/services"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroStyled 
      home="true"
      img={data.defaultBcg.childImageSharp.fluid}
    >
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
    </HeroStyled>

    <About />
    <Services />
  </Layout>
)

export default IndexPage


export const query = graphql`
  {
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
