import React from 'react'
import Title from './title'
import styles from './services.module.css'
import services from '../data/services'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title='our' subtitle='services' />
      
      <div className={styles.center}>
        {services.map((service, i) => (
          <article key={i} className={styles.service}>
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
