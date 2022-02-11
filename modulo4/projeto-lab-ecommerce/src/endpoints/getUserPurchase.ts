import { Request, Response } from 'express'
import connection from '../data/connection'
import { getUser } from '../requisitions/getUser'
import { User } from '../types/types'

export const getUserPurchase = async (req: Request, res: Response): Promise<void> => {
    const user_id = req.params.user_id
    let errorCode: number = 400

    try {
        const user = await getUser(user_id)

        if (user.length < 1) {
            errorCode = 404
            throw new Error("Esse usuário não existe, por gentileza informa um user_id válido")
        }

        const searchForPurchase = await connection('labecommerce_products')
            .select('labecommerce_products.id','labecommerce_products.name', 'labecommerce_products.price', 'labecommerce_products.image_url', 'labecommerce_purchases.quantity', 'labecommerce_purchases.total_price')
            .innerJoin('labecommerce_purchases', 'labecommerce_products.id', 'labecommerce_purchases.product_id')
            .where({ 'labecommerce_purchases.user_id': user_id })

        const result = user.map((item) => {
            return {
                name: item.name,
                purchases: searchForPurchase
            }
        })


        res.status(201).send({ result })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}