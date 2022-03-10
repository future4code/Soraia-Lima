import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { Post, PostInputDTO } from "../model/post";
import { Authetication } from "../services/Authentication";
import { CorrectDate } from "../services/CorretDate";
import { IdGenerator } from "../services/idGenerator";

const authentication = new Authetication()
const userDatabase = new UserDatabase()
const correctDate = new CorrectDate()
const idGenerator = new IdGenerator()
const postDatabase = new PostDatabase()

export class PostBusiness {

    public createPostBusiness = async(post: PostInputDTO, token: string) =>{

        if (!token) {
            throw new CustomError( 401, "Para realizar essa operação é necessário ter token de autorização")
        }

        if (!post.photo_url || !post.description || !post.post_type ) {
            throw new CustomError(422, "Para realizar o cadastro de um novo post é necessário informar os seguintes campos: photo_url, description, post_type.")
        }

        const verifyToken = authentication.getTokenData(token)

        if(!verifyToken){
            throw new CustomError(404, "Seção inserada, por gentileza, efetuar login novamente.")
        }

        const user = await userDatabase.getUserById(verifyToken)
        const userId = user.getId()

        const date = new Date().toLocaleDateString("pt-BR")
        const creation_date = correctDate.sendDateToDB(date)

        const id = idGenerator.generateId()

        const newPost = new Post(id, post.photo_url, post.description, creation_date, post.post_type, userId)

        await postDatabase.insertPost(newPost)
    }
}