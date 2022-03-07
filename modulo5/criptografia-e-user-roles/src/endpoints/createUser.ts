import connection from "../data/connection"
import { Request, Response } from 'express'
import { generateId } from "../services/generateId"
import { generateToken } from "../services/geretareToken"
import { HashManager } from "../services/HashManager"
import { USER_ROLE } from "../types/types"

export const createUser = async (req: Request, res: Response): Promise<void> => {

    let { email, password, role }: { email: string, password: string, role: USER_ROLE } = req.body
    let errorCode: number = 400
    const id = generateId()

    try {

        if (!email || !email.includes('@') || !email.includes('.com')) {
            errorCode = 422
            throw new Error("Formato de email inválido, por gentileza informa um email válido para realizar o cadastro .")
        }

        if (!password || password.length < 6) {
            errorCode = 422;
            throw new Error('Password inválido, por gentileza informa umo password que contenha no mínimo 6 caracteres')
        }

        if (!role) {
            errorCode = 422;
            throw new Error('Role inválido, por gentileza informa um role')
        }

        const senha: string = await new HashManager().generateHash(password)

        await connection('User')
            .insert({ id, email, password: senha, role })

        const token = generateToken({ id, role })

        res.status(200).send({ token })


    } catch (error: any) {

        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}
