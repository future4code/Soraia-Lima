import { Request, Response } from "express"
import { FriendshipBusiness } from "../business/FriendshipBusiness"
import { FriendshipInputDTO } from "../model/friendship"

const friendshipBusiness = new FriendshipBusiness()
export class FriendshipController {

    public makeFriendshipBusiness = async (req: Request, res: Response) => {
        try {

            const inputCreateFriendship: FriendshipInputDTO = {
                friend_followed_id: req.body.friend_followed_id  
            }

            const token = req.headers.authorization as string
 
            await friendshipBusiness.makeFriendshipBusiness(token, inputCreateFriendship)

            res.status(200).send("Nova amizade criada com sucesso!")

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || error.sqlMessage)
        }
    }
}