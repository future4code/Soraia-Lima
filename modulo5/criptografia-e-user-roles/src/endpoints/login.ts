import connection from "../data/connection";
import { Request, Response } from 'express'
import { generateToken } from "../services/geretareToken";
import { HashManager } from "../services/HashManager";

export const login = async (req: Request, res: Response): Promise<void> => {

    const { email, password }: { email: string, password: string } = req.body
    let errorCode: number = 400

    try {

        if (!email || !email.includes('@') || !email.includes('.com')) {
            errorCode = 422
            throw new Error("Formato de email inválido, por gentileza informa um email válido para realizar o cadastro .")
        }

        const [user] = await connection('User').select().where({ email: email })

        const passwordIsCorrect: boolean = user && await new HashManager().compare(password, user.password)

        if (!password || !passwordIsCorrect) {
            errorCode = 422
            throw new Error("Password inválido.")
        }

        const token = generateToken({ id: user.id, role: user.role })
        res.status(200).send({ token })

    } catch (error: any) {

        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}