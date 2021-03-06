import React, { Component } from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStyled from "../components/heroStyled"
import Tours from "../components/tours"

class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Tours" />

        <HeroStyled
          img={this.props.data.toursBcg.childImageSharp.fluid}
        >
          <h1>Tours</h1>
        </HeroStyled>

        <Tours />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    toursBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


export default tours
