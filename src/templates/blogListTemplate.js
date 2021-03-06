import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/blogCard'
import Title from '../components/title'
import styles from './blog.module.css'


const BlogListTemplate = (props) => {
  const { data } = props

  const { currentPage, numPages } = props.pageContext
  const prevPage = (currentPage - 1 === 1) ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  return (
    <Layout>
      <SEO title='Blogs' />

      <section className={styles.blog}>
        <Title title='latest' subtitle='posts' />

        <div className={styles.center}>
          {data.posts.edges.map(({node}) => {
            return (
              <BlogCard 
                key={node.id}
                blog={node}
              />
            )
          })}
        </div>

        <section className={styles.links}>
          {
            !isFirst && (
              <AniLink fade to={prevPage} className={styles.link}>Prev</AniLink>
            )
          }

          {
            // create array with 3 items and for each item we return a link to a page
            Array.from({length: numPages}, (_,i) => {
              return (
                <AniLink 
                  key={i} 
                  fade 
                  to={`/blogs/${i === 0 ? '' : i+1}`} 
                  className={i+1 === currentPage ? `${styles.link} ${styles.active}` : `${styles.link}`}
                >
                  {i+1}
                </AniLink>
              )
            })
          }
          
          {
            !isLast && (
              <AniLink fade to={nextPage} className={styles.link}>Next</AniLink>
            )
          }
        </section>
      </section>
    </Layout>
  )
}

export default BlogListTemplate


// query
export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(skip: $skip, limit: $limit, sort: {fields: published, order: DESC}) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString:"MMMM Do, YYYY")
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`