import { Request, Response } from "express"
import connection from "../data/connection"
import { getPurchase } from "../requisitions/getPurchase"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: any = await connection('labecommerce_users').select('*')

        for (let i = 0; i < users.length; i++) {
            users[i].purchases = await getPurchase(users[i].id)
        }

        res.status(200).send({ users })

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}