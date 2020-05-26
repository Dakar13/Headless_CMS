// Dependencies
import React, { FC, ReactElement } from 'react'

// components
import Footer from '../Footer'
import Fields from '../Fields'

// Styles
import styles from './Content.scss'

// Interfaces
interface iProps {
  children: ReactElement
}

const Content: FC<iProps> = ({ children }): ReactElement => (
  <section className={styles.content}>
    {children}

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Dashboard</h1>
        <p>Content</p>
      </div>

      <Fields />
    </div>

    <Footer />
  </section>
)

export default Content
