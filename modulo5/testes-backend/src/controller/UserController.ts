import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"

export class UserController {
  
    public getUserById = async (req: Request, res: Response) => {


        try {

            const id = req.params.id

            const result = await UserBusiness.getUserByIdBusiness(id)

            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || error.sqlMessage)
        }
    }
}

export default new UserController()