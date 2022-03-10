import *  as  jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = process.env.EXPIRES_IN

export class Authetication {
    public generateToken = (payload: string): string => {
        const token = jwt.sign(
            {payload},
            process.env.JWT_KEY as string,
            { expiresIn }
        )
        return token
    }

    public getTokenData(token: string): string {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as string
        return data
    }
}