import connection from "../data/connection"
import { Product } from "../types/types"

export const getProduct = async (product_id: string): Promise<Product[]> => {

    const result = await connection('labecommerce_products')
        .select()
        .where({ id: product_id })

    return result.map((item: Product) => {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            image_url: item.image_url
        }
    })

}
