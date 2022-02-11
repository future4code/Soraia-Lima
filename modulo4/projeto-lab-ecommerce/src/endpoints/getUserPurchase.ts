import { Request, Response } from 'express'
import { getPurchase } from '../requisitions/getPurchase'
import { getUser } from '../requisitions/getUser'

export const getUserPurchase = async (req: Request, res: Response): Promise<void> => {
    const user_id = req.params.user_id
    let errorCode: number = 400

    try {

        const user = await getUser(user_id)

        if (user.length < 1) {
            errorCode = 404
            throw new Error("Esse usuário não existe, por gentileza informa um user_id válido")
        }

        const searchForPurchase = await getPurchase(user_id)

        const result = user.map((item) => {
            return {
                name: item.name,
                purchases: searchForPurchase
            }
        })

        res.status(200).send({ result })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}