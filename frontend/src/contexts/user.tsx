// Dependencies
import React, { FC, createContext, ReactElement } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { useCookies } from 'react-cookie'
import { getGraphQlError } from 'fogg-utils'

// Mutations
import LOGIN_MUTATION from '@graphql/user/login.mutation'

interface iUserContext {
  login(input: any): any
  user: any
}

interface iProps {
  children: ReactElement
  connectedUser?: object
}

export const UserContext = createContext<iUserContext>({
  login: () => null,
  user: {}
})

const UserProvider: FC<iProps> = ({
  children,
  connectedUser = {}
}): ReactElement => {
  const { mutate } = useApolloClient()
  const [, setCookie] = useCookies()

  async function login(input: {
    email: string
    password: string
  }): Promise<any> {
    try {
      const { data } = await mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email: input.email,
          password: input.password
        }
      })

      if (data) {
        setCookie('at', data.login.token, { path: '/' })

        return data.login.token
      }
    } catch (err) {
      return getGraphQlError(err)
    }
  }

  const context = {
    login,
    user: connectedUser
  }

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserProvider
