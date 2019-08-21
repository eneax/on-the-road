import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {FaMoneyBillWave, FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/layout'
import HeroStyled from '../components/heroStyled'
import Day from '../components/day'
import styles from './template.module.css'


const TourTemplate = ({ data }) => {
  const {name, price, country, days, start, description: {description}, journey, images} = data.tour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <HeroStyled img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((tourImage, i) => (
              <Img key={i} fluid={tourImage.fluid} alt='single tour' className={styles.image} />
            ))}
          </div>

          <h2>{name}</h2>
          
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>

            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>

          <h4>starts on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>

          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {
              journey.map((item, i) => (
                <Day key={i} day={item.day} info={item.info} />
              ))
            }
          </div>

          <AniLink fade to='/tours' className='btn-primary'>
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
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
        info
      }
      images{
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default TourTemplate
