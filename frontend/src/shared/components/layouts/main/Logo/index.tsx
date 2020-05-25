/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
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
