import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from '../components/items.module.css'
import Tour from './tour'
import Title from '../components/title'

const getFeaturedTours = graphql`
  query featuredTours {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          contentful_id
          name
          price
          slug
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const ToursFeatured = () => {
  const response = useStaticQuery(getFeaturedTours)
  const tours = response.featuredTours.edges
  
  return (
    <section className={styles.tours}>
      <Title title='featured' subtitle='tours' />
  
      {
        tours.map(({ node }) => {
          return (
            <Tour 
              key={node.contentful_id}
              tour={node}
            />
          )
        })
      }

      <AniLink fade to='/tours' className='btn-primary'>All Tours</AniLink>
    </section>
  )
}

export default ToursFeatured
