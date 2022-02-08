import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(name: string, type: string, order: string, sort: string, page: number): Promise<any> {

   const size: number = 5
   let offset = size * (page - 1)

   if (sort !== "email" && sort !== "type") {
      sort = "name"
   }

   if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
      order = "DESC"
   }

   if (!name && !type) {
      const result = await connection("aula48_exercicio").select('*')
      return result
   }

   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio 
      WHERE name LIKE "%${name}%" OR type LIKE "%${type}%"
      ORDER BY ${sort} ${order}
      LIMIT ${size}
      OFFSET ${offset};
      `)
   return result[0]
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const name = req.query.name as string
      const type = req.query.type as string

      let sort = req.query.sort as string
      let order = req.query.order as string
      let page: number = Number(req.query.page)

      if (!order) {
         order = "DESC"
      }

      if (page < 1 || isNaN(page)) {
         page = 1
      }

      const users = await selectAllUsers(name, type, order, sort, page)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes foundzzzzzzzzzzzz")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}