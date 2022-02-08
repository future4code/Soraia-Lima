import { Request, Response } from "express"
import { connection } from "../data/connection"

// 1 - b)
export default async function selectAllUsersByType(type: string): Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       WHERE type LIKE "%${type}%";
    `)

    return result[0]
}

export const getAllUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type: string = req.params.type as string
        const users = await selectAllUsersByType(type)

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