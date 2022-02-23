import * as byscript from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export class HashManager {

    // responsável por criptografar uma string usando o bcryptjs
    public generateHash = async (plainText: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await byscript.genSalt(rounds)
        const result = await byscript.hash(plainText, salt)

        return result
    }

    // compara se a string passada é igual a string do nosso DB.
    public compare = async (plainText: string, hash: string): Promise<boolean> => {
        const result = await byscript.compare(plainText, hash)
        return result
    }
}