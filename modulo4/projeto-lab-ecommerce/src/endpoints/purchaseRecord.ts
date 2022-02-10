import { Request, Response } from "express"
import connection from "../data/connection"
import { Product, PurchaseRecord } from "../types/types"

export const pruchaseRecord = async (req: Request, res: Response): Promise<void> => {
    const { user_id, product_id, quantity }: { user_id: string, product_id: string, quantity: number } = req.body
    const token = req.headers.authorization
    let errorCode: number = 400
    try {

        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!user_id || !product_id || !quantity) {
            errorCode = 404
            throw new Error("Para realizar o o resgistro de compras é necessário informar os seguintes campos: user_id, product_id, quantity.")
        }

        const product: Product[] = await connection('labecommerce_products')
            .select()
            .where({ id: product_id })

        let price = product[0].price
        price = price * quantity

        await connection('labecommerce_purchases')
            .insert({
                id: Date.now().toString(),
                user_id,
                product_id,
                quantity,
                total_price: price
            })

        res.status(201).send()

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}