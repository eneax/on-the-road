import React from 'react'
import Title from '../components/title'
import styles from '../components/about.module.css'
import img from '../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={styles.about}>
      <Title title='about' subtitle='us' />

      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="On the road background"/>
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
