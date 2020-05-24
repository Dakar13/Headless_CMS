// Dependencies
import React from 'react'

// Components
import Link from 'next/link'

// Styles
import styles from './Logo.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img src="/images/logo.png" />
        </a>
      </Link>
    </div>
  )
}

export default Logo
