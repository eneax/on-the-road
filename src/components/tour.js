import React from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaMap } from 'react-icons/fa'

import styles from './tour.module.css'


const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  
  // set first img in the array as main img
  let mainImage = images[0].fluid

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
            {country}
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

export default Tour
