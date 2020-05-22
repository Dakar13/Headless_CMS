// Dependencies
import { ApolloServer, makeExecutableSchema } from 'apollo-server'

// Models
import models from './models'

// Type Definitions
// import resolvers from './graphql/resolvers'
// import typeDefs from './graphql/types'
const typeDefs = `
  type Hello {
    message: String!
  }
  type Query {
    sayHello(name: String!): Hello
  }
`

// Resolvers
const resolvers = {
  Query: {
    sayHello: (_: any, args: any): any => {
      return {
        message: `Hello ${args.name || 'world'}`
      }
    }
  }
}

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

// Running Apollo Server
const alter = true
const force = false
models.sequelize.sync({ alter, force }).then(() => {
  // eslint-disable-next-line no-console
  apolloServer.listen(5000).then(({ url }) => console.log(`Running on ${url}`))
  // eslint-disable-next-line max-len
}) /** Recomendacion, una vez que ya se cuente con registros, elimine { force: true }, de lo contrario perdera lo ya almacenado en las tablas */
