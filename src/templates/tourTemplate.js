import React from 'react'
import { graphql } from 'gatsby'

const TourTemplate = ({ data }) => {
  const {name, price, country, days, start, description: {description}, journey, images} = data.tour

  const [mainImage, ...tourImages] = images

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export const query = graphql`  
  query($slug: String!) { # from gatsby-node --> context: { slug: node.slug } 
    tour: contentfulTour(slug: {eq:$slug}) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description{
        description
      }
      journey{
        day
        id
      }
      images{
        fluid{
          src
        }
      }
    }
  }
`

export default TourTemplate
