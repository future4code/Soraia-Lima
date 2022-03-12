import { FriendshipBaseDatabase } from "../data/FriendshipBaseDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError"
import { FeedOutputDTO, Friendship, FriendshipInputDTO, UnfriendshipInputDTO } from "../model/friendship"
import { Authetication } from "../services/Authentication"
import { CorrectDate } from "../services/CorretDate"

const authentication = new Authetication()
const userDatabase = new UserDatabase()
const friendship = new FriendshipBaseDatabase()
const correctDate = new CorrectDate()

export class FriendshipBusiness {
    public makeFriendshipBusiness = async (token: string, id: FriendshipInputDTO) => {

        if (!token) {
            throw new CustomError(401, "Para realizar essa operação é necessário ter token de autorização.")
        }

        if (!id.friend_id) {
            throw new CustomError(401, "Para ser amigo de  um usuário é necesário informar o: friend_id.")
        }

        const verifyToken = authentication.getTokenData(token)
        const userFollower = await userDatabase.getUserById(verifyToken.id)
        const userFollowerId: string = userFollower.getId()

        const userFollowed = await userDatabase.getUserById(id.friend_id)
        if (!userFollowed) {
            throw new CustomError(404, "Pessoa não encontrada, por gentileza informar um friend_id válido.")
        }

        const input = new Friendship(userFollowerId, id.friend_id)
        await friendship.insertFriendship(input)
    }

    public unfriendBusiness = async (token: string, id: UnfriendshipInputDTO) => {

        if (!token) {
            throw new CustomError(401, "Para realizar essa operação é necessário ter token de autorização")
        }

        if (!id.unfriend_id) {
            throw new CustomError(401, "Para deixar de ser amigo de  um usuário é necesário informar o: unfriend_id")
        }

        const verifyToken = authentication.getTokenData(token)
        const userFollower = await userDatabase.getUserById(verifyToken.id)
        const userFollowerId: string = userFollower.getId()

        const userUnfollowed = await userDatabase.getUserById(id.unfriend_id)
        if (!userUnfollowed) {
            throw new CustomError(404, "Pessoa não encontrada, por gentileza informar um unfriend_id válido")
        }

        const input = new Friendship(userFollowerId, id.unfriend_id)
        await friendship.deleteFriendship(input)
    }

    public getFeedBusiness = async (token: string) => {

        if (!token) {
            throw new CustomError(401, "Para realizar essa operação é necessário ter token de autorização")
        }

        const verifyToken = authentication.getTokenData(token)
        const user = await userDatabase.getUserById(verifyToken.id)
        const userId: string = user.getId()

        const feed = await friendship.getFeed(userId)

        if (feed.length < 1) {
            throw new CustomError(404, "Você ainda não é amigo de ninguém, ou as pessoas que você é amigo ainda não postaram nada :(")
        }

        const newFeed: any = feed.map((item: FeedOutputDTO) => {
            return ({
                id: item.id,
                photo_url: item.photo_url,
                description: item.description,
                createdAt: correctDate.currentDateFormatted(item.creation_date),
                author_id: item.author_id,
                author_name: item.name
            })
        })
        return newFeed
    }
}