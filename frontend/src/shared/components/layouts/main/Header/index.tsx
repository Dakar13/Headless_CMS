// Dependencies
import React, { FC, ReactElement } from 'react'

// Styles
import styles from './Header.scss'

// Components
import Breadcrumbs from '../Breadcrumbs'

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.Header}>
      <Breadcrumbs />
    </header>
  )
}

export default Header
