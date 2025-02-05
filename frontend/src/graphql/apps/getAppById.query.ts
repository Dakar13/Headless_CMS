// Dependencies
import { gql } from 'apollo-boost'

export default gql`
  query getAppById($id: String!) {
    getAppById(id: $id) {
      id
      appName
      identifier
      icon
      models {
        id
        modelName
        identifier
      }
    }
  }
`
