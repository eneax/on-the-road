import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStyled from "../components/heroStyled"
import Contact from "../components/contact"

const Contacts = ({ data }) => (
  <Layout>
    <SEO title="Contact" />

    <HeroStyled
      img={data.contactBcg.childImageSharp.fluid}
    >
      <h1>Contact</h1>
    </HeroStyled>

    <Contact />
    
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

export default Contacts
