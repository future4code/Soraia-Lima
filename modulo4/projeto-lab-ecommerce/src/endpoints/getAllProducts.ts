import { Request, Response } from "express"
import connection from "../data/connection"
import { Product } from '../types/types'

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {

    const order = req.query.order as string
    const search = req.query.search as string

    try {

        if (order) {
            const resultOrder: Product[] = await connection('labecommerce_products')
                .select('*')
                .orderBy('labecommerce_products.name', order.toLowerCase())

            res.status(200).send({ products: resultOrder })
        }

        if (search) {
            const resultSearch: Product[] = await connection('labecommerce_products')
                .select('*')
                .where('labecommerce_products.name', 'like', `%${search}%`)

            res.status(200).send({ products: resultSearch })
        }

        const result: Product[] = await connection('labecommerce_products').select('*')
        res.status(200).send({ products: result })

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}
