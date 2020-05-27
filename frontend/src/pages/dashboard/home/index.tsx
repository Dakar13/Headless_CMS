/* eslint-disable react/react-in-jsx-scope */
// Dependencies
import { ApolloProvider } from 'react-apollo-hooks'

// Hooks
import useApolloClient from '@shared/lib/apollo'

// Contexts
import AppProvider from '@contexts/app'
import UserProvider from '@contexts/user'

// Components
import DashboardLayout from '@app/dashboard/components/Layout'

export default () => (
  <ApolloProvider client={useApolloClient()}>
    <UserProvider>
      <AppProvider>
        <DashboardLayout moduleName="Home" />
      </AppProvider>
    </UserProvider>
  </ApolloProvider>
)
