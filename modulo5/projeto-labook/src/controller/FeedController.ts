import { Request, Response } from "express"
import { FeedBusiness } from "../business/FeedBusiness"

const feedBusiness = new FeedBusiness()

export class FeedController {

    public getFeedController = async (req: Request, res: Response): Promise<void> => {

        try {
            const token = req.headers.authorization as string
            const type = req.query.type as string
            const feed = await feedBusiness.getFeedBusiness(token, type)
           
            res.status(200).send({feed})

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || error.sqlMessage)
        }
    }
}