import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from './blog.module.css'
import Layout from '../components/layout'


const BlogTemplate = ({ data }) => {
  const { title, published, text: {json} } = data.post

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <AniLink fade to='/blog' className='btn-primary'>all posts</AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: {eq: $slug}) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default BlogTemplate
