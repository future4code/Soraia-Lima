import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { Post, PostInputDTO } from "../model/post";
import { Authetication } from "../services/Authentication";
import { CorrectDate } from "../services/CorretDate";
import { IdGenerator } from "../services/IdGenerator";

const authentication = new Authetication()
const userDatabase = new UserDatabase()
const correctDate = new CorrectDate()
const idGenerator = new IdGenerator()
const postDatabase = new PostDatabase()

export class PostBusiness {

    public createPostBusiness = async (post: PostInputDTO, token: string) => {

        if (!token) {
            throw new CustomError(401, "Para realizar essa operação é necessário ter token de autorização")
        }

        if (!post.photo_url || !post.description || !post.post_type) {
            throw new CustomError(422, "Para realizar o cadastro de um novo post é necessário informar os seguintes campos: photo_url, description, post_type.")
        }

        if (post.post_type.toUpperCase() !== "NORMAL" && post.post_type.toUpperCase() !== "EVENTO") {
            throw new CustomError(422, "Por gentileza, informa om post_type válido. Pode ser 'NORMAL' ou 'EVENTO' ")
        }

        const verifyToken = authentication.getTokenData(token)

        const user = await userDatabase.getUserById(verifyToken.id)
        const userId = user.getId()

        const date = new Date().toLocaleDateString("pt-BR")
        const creation_date = correctDate.sendDateToDB(date)

        const id = idGenerator.generateId()

        const newPost = new Post(id, post.photo_url, post.description, creation_date, post.post_type, userId)

        await postDatabase.insertPost(newPost)
    }

    public getPostByIdBusiness = async (id: string, token: string) => {

        if (!token) {
            throw new CustomError(401, "Para realizar essa operação é necessário ter token de autorização")
        }

        authentication.getTokenData(token)

        const post = await postDatabase.getPost(id)
        if (!post) {
            throw new CustomError(404, "Post não encontrado, por gentileza informar um id válido")
        }
       
        const user = await userDatabase.getUserById(post.author_id)

        const newPost = {
            id: post.id,
            photo_url: post.photo_url,
            description: post.description,
            creation_date: correctDate.currentDateFormatted(post.creation_date),
            post_type: post.post_type,
            author_id: post.author_id,
            author_name: user.name
        }

        return newPost
    }
}