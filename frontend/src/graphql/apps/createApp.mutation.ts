// Dependencies
import { gql } from 'apollo-boost'

export default gql`
  mutation createApp(
    $appName: String!
    $icon: String!
    $description: String!
    $userId: UUID!
  ) {
    createApp(
      input: {
        appName: $appName
        icon: $icon
        description: $description
        userId: $userId
      }
    ) {
      appName
      id
      icon
      description
      userId
    }
  }
`
