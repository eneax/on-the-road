import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Title from './title'
import BlogCard from './blogCard'

import styles from './blog.module.css'


const getPosts = graphql`
  {
    posts: allContentfulPost(sort: {fields: published, order: DESC}) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          createdAt(formatString: "LLLL")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title='our' subtitle='blog' />

      <div className={styles.center}>
        {
          posts.edges.map(({node}) => (
            <BlogCard 
              key={node.id}
              blog={node}
            />
          ))
        }
      </div>
    </section>
  )
}

export default BlogList
