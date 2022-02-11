import { Request, Response } from "express"
import { connection } from "../data/connection"

// 1 - a)
export default async function selectAllUsersByName(name:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%";
    `)
 
    return result[0]
 }

export const getAllUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name:string = req.query.name as string
        const users = await selectAllUsersByName(name)
        console.log(req.query)
       
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