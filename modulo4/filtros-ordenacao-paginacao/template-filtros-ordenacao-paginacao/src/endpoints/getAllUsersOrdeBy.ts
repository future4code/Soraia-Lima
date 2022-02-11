import { Request, Response } from "express"
import { connection } from "../data/connection"

// 2)
export default async function selectAllUsersOrder(sort: string): Promise<any> {

    if (sort !== "name" && sort !== "type") {
        sort = "email"
    }

    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       ORDER BY ${sort} ASC;
    `)

    return result[0]
}

export const getAllUsersOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        let sort = req.params.sort
        const users = await selectAllUsersOrder(sort)

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