import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome home</h1>
    
    <Link to="blog">Check out the blog</Link>
  </Layout>
)

export default IndexPage
