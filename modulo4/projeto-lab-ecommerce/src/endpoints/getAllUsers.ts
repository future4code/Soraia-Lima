import { Request, Response } from "express"
import connection from "../data/connection"
import { User } from '../types/types'

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const result: User[] = await connection('labecommerce_users').select('*')
        res.status(200).send({ users: result })

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}