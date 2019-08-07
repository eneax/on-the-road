import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStyled from "../components/heroStyled"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />

    <HeroStyled
      img={data.contactBcg.childImageSharp.fluid}
    >
      <h1>Contact</h1>
    </HeroStyled>
    
  </Layout>
)

export const query = graphql`
  {
    contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Contact
