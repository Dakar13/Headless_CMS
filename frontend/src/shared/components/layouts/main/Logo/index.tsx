// Dependencies
import React, { ReactElement } from 'react'

// Components
import Link from '@ui/Link'

// Styles
import styles from './Logo.scss'

const Logo = (): ReactElement => {
  return (
    <div className={styles.logo}>
      <Link href="/dashboard">
        <img src="/images/logo.png" />
      </Link>
    </div>
  )
}

export default Logo
