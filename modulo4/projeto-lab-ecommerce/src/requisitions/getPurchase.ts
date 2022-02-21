import connection from "../data/connection"
import { PurchaseRecord } from "../types/types"

export const getPurchase = async (user_id: string): Promise<PurchaseRecord[]> => {

    const result = await connection('labecommerce_products')
        .select('labecommerce_products.id', 'labecommerce_products.name', 'labecommerce_products.price', 'labecommerce_products.image_url', 'labecommerce_purchases.quantity', 'labecommerce_purchases.total_price')
        .innerJoin('labecommerce_purchases', 'labecommerce_products.id', 'labecommerce_purchases.product_id')
        .where({ 'labecommerce_purchases.user_id': user_id })

    return result
}
