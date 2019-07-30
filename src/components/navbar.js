import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import styles from './navbar.module.css'
import links from '../data/links'
import socialIcons from '../data/socialIcons'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt={`${logo} logo`} />
          <button 
            type="button" 
            className={styles.logoBtn}
            onClick={toggleNav}
          >
            <FaAlignRight className={styles.logoIcon}/>
          </button>
        </div>

        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
