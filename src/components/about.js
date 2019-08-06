import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Title from '../components/title'
import styles from '../components/about.module.css'


const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title='about' subtitle='us' />

      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="On the road background" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex nobis, quam libero, adipisci ratione, aliquid numquam provident officia officiis maxime accusantium. Dolorem est sed culpa veritatis ducimus iste porro.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex nobis, quam libero, adipisci ratione, aliquid numquam provident officia officiis maxime accusantium. Dolorem est sed culpa veritatis ducimus iste porro.</p>
          <button type='button' className='btn-primary'>
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
