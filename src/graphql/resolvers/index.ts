import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas-ts'

const resolverArray = fileLoader(path.join(__dirname, './'))
const resolvers = mergeResolvers(resolverArray, { all: true })

export default resolvers
