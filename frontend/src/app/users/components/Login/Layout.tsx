/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
// Dependencies
import React, { FC, ReactElement, useContext } from 'react'
import Head from 'next/head'

// Contexts
import { UserContext } from '@contexts/user'

// Components
import Login from './Login'

// Styles
import './Layout.scss'

// Interfaces
interface iProps {
  currentUrl: string
}

const Layout: FC<iProps> = ({ currentUrl }): ReactElement => {
  const { login } = useContext(UserContext)
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="title" content="Login" />
      </Head>

      <Login login={login} currentUrl={currentUrl} />
    </>
  )
}

export default Layout
