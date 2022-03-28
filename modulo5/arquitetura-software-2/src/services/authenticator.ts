import * as jwt from "jsonwebtoken"
import { authenticationData } from "../model/user"

export class Authenticator {

  public generateToken = (payload: authenticationData): string => {
    return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      { expiresIn: "24min" }
    )
  }

  public getTokenData = (token: string): authenticationData => {
    return jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as authenticationData
  }

}