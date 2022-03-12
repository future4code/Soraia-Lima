import { FriendshipBaseDatabase } from "../data/FriendshipBaseDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError"
import { Friendship, FriendshipInputDTO } from "../model/friendship"
import { Authetication } from "../services/Authentication"

const authentication = new Authetication()
const userDatabase = new UserDatabase()
const friendship = new FriendshipBaseDatabase()

export class FriendshipBusiness {
    public makeFriendshipBusiness = async (token: string, id: FriendshipInputDTO) => {

        if (!token) {
            throw new CustomError(401, "Para realizar essa operação é necessário ter token de autorização")
        }

        if (!id) {
            throw new CustomError(401, "Para ser amigo de  um usuário é necesário informar o: friend_followed_id")
        }

        const verifyToken = authentication.getTokenData(token)
        const userFollower = await userDatabase.getUserById(verifyToken.id)
        const userFollowerId: string = userFollower.getId()

        const userFollowed = await userDatabase.getUserById(id.friend_followed_id)
        if (!userFollowed) {
            throw new CustomError(404, "Pessoa não encontrada, por gentileza informar um friend_followed_id válido")
        }

        const input = new Friendship(userFollowerId, id.friend_followed_id)
        await friendship.insertFriendship(input)
    }
}