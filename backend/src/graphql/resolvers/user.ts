/* eslint-disable @typescript-eslint/ban-types */
// Interfaces
import {
  iUser,
  iCreateUserInput,
  iModels,
  iLoginInput,
  iAuthPayload
} from '../../interfaces'

// Utils
import { doLogin } from '../../utils/auth'

export default {
  Query: {
    getUsers: (
      _: object,
      _args: object,
      { models }: { models: iModels }
    ): iUser[] =>
      models.User.findAll({
        include: [
          {
            model: models.App,
            as: 'apps'
          }
        ]
      })
  },
  Mutation: {
    createUser: (
      _: object,
      { input }: { input: iCreateUserInput },
      { models }: { models: iModels }
    ): iUser => models.User.create({ ...input }),
    login: (
      _: object,
      { input }: { input: iLoginInput },
      { models }: { models: iModels }
    ): Promise<iAuthPayload> => doLogin(input.email, input.password, models)
  }
}
