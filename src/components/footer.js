import React from 'react'
import { Link } from 'gatsby'

import styles from './footer.module.css'
import links from '../data/links'
import socialIcons from '../data/socialIcons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, i) => (
          <Link key={i} to={link.path}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, i) => (
          <a href={item.url} key={i} target='_blank' rel="noopener noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        On the Road Inc. © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
