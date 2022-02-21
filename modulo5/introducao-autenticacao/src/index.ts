import { Request, Response } from "express";
import { generateId } from "./services/generateId";
import app from "./app/app";
import { createUser } from "./endpoints/createUser";
import { generateToken } from "./services/generateToken";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getData } from "./endpoints/getDada";
import { connect } from "http2";
import connection from "./data/connection";

app.post('/user/signup', async (req: Request, res: Response): Promise<void> => {
    const { email, password }: { email: string, password: string } = req.body
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

        await createUser(id, email, password)

        const token = generateToken({ id })

        res.status(200).send({ token })

    } catch (error: any) {

        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

app.post('/user/login', async (req: Request, res: Response): Promise<void> => {
    const { email, password }: { email: string, password: string } = req.body
    let errorCode: number = 400

    try {

        if (!email || !email.includes('@') || !email.includes('.com')) {
            errorCode = 422
            throw new Error("Formato de email inválido, por gentileza informa um email válido para realizar o cadastro .")
        }

        const login = await getUserByEmail(email)

        if (login.password !== password) {
            errorCode = 422
            throw new Error("Password inválido.")
        }
        const token = generateToken({ id: login.id })
        res.status(200).send({ token })

    } catch (error: any) {

        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

app.get('/user/profile', async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    const token = req.headers.authorization as string

    try {
        const verificarToken = getData(token)

        const user = await connection('User')
            .select()
            .where({ id: verificarToken.id })

        res.status(200).send(user)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})