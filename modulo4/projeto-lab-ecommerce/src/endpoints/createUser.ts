import { Request, Response } from "express"
import connection from "../data/connection"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body
    const token = req.headers.authorization
    let errorCode: number = 400

    try {
       
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!name || !email || !password) {
            errorCode = 404
            throw new Error("Para realizar o cadastro de um novo usuário é necessário informar os seguintes campos: name, email e password.")
        }

        await connection('labecommerce_users')
            .insert({
                id: Date.now().toString(),
                name,
                email,
                password
            })
        res.status(201).end()

    } catch (error: any) {

        res.status(errorCode).send({ message: error.message || error.sqlMessage })

    }
}