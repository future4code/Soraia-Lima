import { Request, Response } from "express"
import connection from "../data/connection"

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    const { name, price, image_url }: { name: string, price: number, image_url: string } = req.body
    const token = req.headers.authorization
    let errorCode: number = 400

    try {

        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!name || !price || !image_url) {
            errorCode = 404
            throw new Error("Para realizar o cadastro de um novo produto é necessário informar os seguintes campos: name, price e image_url.")
        }

        await connection('labecommerce_products')
            .insert({
                id: Date.now().toString(),
                name,
                price,
                image_url
            })
        res.status(201).end()

    } catch (error: any) {

        res.status(errorCode).send({ message: error.message || error.sqlMessage })

    }
}