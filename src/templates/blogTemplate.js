import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './blog.module.css'
import Layout from '../components/layout'
import SEO from '../components/seo'


const BlogTemplate = ({ data }) => {
  const { title, published, text: {json} } = data.post
  const options  = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <div className='rich'>
            <h3>coooool image</h3>
            <img width="400" src={node.data.target.fields.file['en-US'].url} alt=""/>
            <p>image provided by john doe</p>
          </div>
        )
      },
      "embedded-entry-block": (node) => {
        const {title, image, text} = node.data.target.fields

        return (
          <div>
            <p>another post: </p>
            <h1>{title['en-US']}</h1>
            <img width='400' src={image['en-US'].fields.file['en-US'].url} alt=""/>
            {documentToReactComponents(text['en-US'])}
          </div>
        )
      }
    }
  }

  return (
    <Layout>
      <SEO title={title} />

      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>

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
