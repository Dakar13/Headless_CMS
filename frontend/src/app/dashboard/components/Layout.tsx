/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { FC, ReactElement, useContext } from 'react'
import Head from 'next/head'

// Contexts
import { UserContext } from '@contexts/user'

// Components
import Apps from './Apps'
import Home from './Home'

// Styles
import styles from './Layout.scss'

// Interface
interface iProps {
  moduleName?: string
}

const Layout: FC<iProps> = ({ moduleName = '' }): ReactElement => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="title" content="Dashboard" />
      </Head>

      <div className={styles.layout}>
        {moduleName === 'Home' && <Home />}
        {!moduleName && <Apps />}
      </div>
    </>
  )
}

export default Layout
