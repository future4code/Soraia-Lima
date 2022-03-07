import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/types"

const expiresIn = '10m' // quando esse token vai expirar

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        { id: input.id }, // o que será salvo no token, nese caso será o id.
        process.env.JWT_KEY as string, // chave SECRETA que será usada para criptografar esse token. 
        { expiresIn }
    )
    return token
}