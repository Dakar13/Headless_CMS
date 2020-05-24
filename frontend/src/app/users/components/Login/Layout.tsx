// Dependencies
import React, { FC, ReactElement } from 'react'
import Head from 'next/head'

// Components
import Login from './Login'

// Styles
import './Layout.scss'

const Layout: FC = (): ReactElement => (
  <>
    <Head>
      <title>Login</title>
      <meta name="title" content="Login" />
    </Head>

    <Login />
  </>
)

export default Layout
