import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>title: {data.site.siteMetadata.title}</p>
      <p>description: {data.site.siteMetadata.description}</p>
      <p>author: {data.site.siteMetadata.author}</p>

      <Link to="/">Back home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default Blog
