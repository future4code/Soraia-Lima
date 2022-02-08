import { Request, Response } from "express"
import { connection } from "../data/connection"

// 3)
export default async function selectAllUsersPage(page: number): Promise<any> {
    const size: number = 5
    let offset = size * (page - 1)

    const result = await connection("aula48_exercicio").select("*").limit(size).offset(offset)
    return result
}

export const getAllUsersPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page: number = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        const users = await selectAllUsersPage(page)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}