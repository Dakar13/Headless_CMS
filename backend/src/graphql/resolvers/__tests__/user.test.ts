import { isFunction } from 'fogg-utils'
import user from '../user'

describe('#Query', () => {
  it('Should have getUsers method', () => {
    expect(isFunction(user.Query.getUsers)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('Should have createUser method', () => {
    expect(isFunction(user.Mutation.createUser)).toBe(true)
  })
  it('Should have login method', () => {
    expect(isFunction(user.Mutation.login)).toBe(true)
  })
})
