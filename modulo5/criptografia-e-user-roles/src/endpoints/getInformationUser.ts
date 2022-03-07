import connection from "../data/connection"
import { Request, Response } from 'express'
import { generateId } from "../services/generateId"
import { generateToken } from "../services/geretareToken"
import { HashManager } from "../services/HashManager"
import { getData } from "../services/getData"

export const getInformationUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    const token = req.headers.authorization as string

    try {
        const verificarToken = getData(token)

        if (verificarToken.role !== "NORMAL") {
            errorCode = 403
            throw new Error("Usuário sem permissão, somente usuário com role = NORMAL, podem ter acesso a esse edpoint")
        }
        const [user] = await connection('User')
            .select()
            .where({ id: verificarToken.id })

        res.status(200).send({ id: user.id, email: user.email, role: user.role })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}
