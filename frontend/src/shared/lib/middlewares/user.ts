// Dependencies
import jwt from 'jsonwebtoken'
import { getBase64 } from 'fogg-utils'

// Configuration
import config from '../../../config'

export function User(req: any): any {
  const {
    security: { secretKey }
  } = config

  function jwtVerify(cb: any, at = false): void {
    const accessToken = req.cookies.at || at

    jwt.verify(
      accessToken,
      secretKey,
      (error: any, accessTokenData: any = {}) => {
        const { data: user } = accessTokenData

        if (error || !user) {
          return cb(false)
        }

        const userData = getBase64(user)
        req.user = userData

        return cb(userData)
      }
    )
  }

  async function getUserData(): Promise<any> {
    const UserPromise = new Promise(resolve =>
      jwtVerify((user: any) => resolve(user))
    )

    const user = await UserPromise

    return user
  }

  return {
    jwtVerify,
    getUserData
  }
}

export const isConnected = (
  isLogged = true,
  privileges = ['user'],
  redirectTo = '/'
) => (req: any, res: any, next: any): void => {
  User(req).jwtVerify((user: any) => {
    if (!user && !isLogged) {
      return next()
    }
    if (user && isLogged) {
      if (privileges.includes('god') && user.privilege === 'god') {
        return next()
      }

      if (privileges.includes('admin') && user.privilege === 'admin') {
        return next()
      }

      if (privileges.includes('editor') && user.privilege === 'editor') {
        return next()
      }

      if (privileges.includes('user') && user.privilege === 'user') {
        return next()
      }
      res.redirect(redirectTo)
    } else {
      res.redirect(redirectTo)
    }
  })
}

export default (req: any, res: any, next: any): void => {
  res.user = User(req)

  return next()
}
