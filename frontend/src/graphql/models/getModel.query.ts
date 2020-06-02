// Dependencies
import { gql } from 'apollo-boost'

export default gql`
  query getModel($identifier: String!) {
    getModel(identifier: $identifier) {
      id
      appId
      modelName
      identifier
      description
      fields {
        id
        type
        fieldName
        identifier
        description
        isHide
        isMedia
        isRequired
        isUnique
        isSystem
        isPrimaryKey
      }
    }
  }
`
