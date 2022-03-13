import { FeedDatabade } from "../data/FeedDataBase"
import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError"
import { FeedOutputDTO } from "../model/friendship"
import { Authetication } from "../services/Authentication"
import { CorrectDate } from "../services/CorretDate"

const authentication = new Authetication()
const userDatabase = new UserDatabase()
const correctDate = new CorrectDate()
const feedDatabade = new FeedDatabade()

export class FeedBusiness {

    public getFeedBusiness = async (token: string, type?: string) => {

        if (!token) {
            throw new CustomError(401, "Para realizar essa operação é necessário ter token de autorização")
        }

        const verifyToken = authentication.getTokenData(token)
        const user = await userDatabase.getUserById(verifyToken.id)
        const userId: string = user.getId()

        if (type) {

            if (type.toUpperCase() !== "NORMAL" && type.toUpperCase() !== "EVENTO") {
                throw new CustomError(422, "Por gentileza, informa um type valido: 'NORMAL' ou 'EVENTO'.")
            }

            const feedByType = await feedDatabade.getFeedByType(type)

            if (feedByType.length < 1) {
                throw new CustomError(404, "Você ainda não é amigo de ninguém, ou as pessoas que você é amigo ainda não postaram nada :(")
            }

            const newFeed: any = feedByType.map((item: FeedOutputDTO) => {
                return ({
                    id: item.id,
                    photo_url: item.photo_url,
                    description: item.description,
                    createdAt: correctDate.currentDateFormatted(item.creation_date),
                    post_type: item.post_type,
                    author_id: item.author_id,
                    author_name: item.name
                })
            })
            return newFeed
        }

        const feed = await feedDatabade.getFeed(userId)

        if (feed.length < 1) {
            throw new CustomError(404, "Você ainda não é amigo de ninguém, ou as pessoas que você é amigo ainda não postaram nada :(")
        }

        const newFeed: any = feed.map((item: FeedOutputDTO) => {
            return ({
                id: item.id,
                photo_url: item.photo_url,
                description: item.description,
                createdAt: correctDate.currentDateFormatted(item.creation_date),
                post_type: item.post_type,
                author_id: item.author_id,
                author_name: item.name
            })
        })
        return newFeed
    }
}