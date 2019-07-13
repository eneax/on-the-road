import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>navbar</h1>

      <ul className={styles.links}>
        <li>link one</li>
        <li>link two</li>
      </ul>
    </div>
  )
}

export default Navbar
