import React from "react"
import Title from "../components/title"
import styles from "../components/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />

      <div className={styles.center}>
        <form action="https://formspree.io/eneaxharja@gmail.com" method="POST" className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="john.smith@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Your message ..."
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
