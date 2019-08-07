import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStyled from "../components/heroStyled"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <HeroStyled
      img={data.blogBcg.childImageSharp.fluid}
    >
      <h1>Blog</h1>
    </HeroStyled>

    <Link to="/">Back home</Link>
  </Layout>
)

export const query = graphql`
  {
    blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Blog
