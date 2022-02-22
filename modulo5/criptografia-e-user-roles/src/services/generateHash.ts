import * as byscript from 'bcryptjs'

import dotenv from 'dotenv'

dotenv.config()

// responsável por criptografar uma string usando o bcryptjs

export const generateHash = async (plainText: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await byscript.genSalt(rounds)
    const result = await byscript.hash(plainText, salt)

    return result
}