import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaMap } from 'react-icons/fa'
import PropTypes from 'prop-types'

import styles from './tour.module.css'


const getMainImage = graphql`
  query{
    file(relativePath: {eq: "defaultBcg.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


const Tour = ({ tour }) => {
  const data = useStaticQuery(getMainImage)
  const img = data.file.childImageSharp.fluid

  const { name, price, country, days, slug, images } = tour
  
  // set first img in the array as main img
  let mainImage = images ? images[0].fluid : img
  // let mainImage
  // if (images) {
  //   mainImage = images[0].fluid
  // } else {
  //   mainImage = img
  // }


  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainImage} className={styles.img} alt='single tour' />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>Details</AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            { country || 'default country' }
          </h4>

          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}


Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  })
}


export default Tour
