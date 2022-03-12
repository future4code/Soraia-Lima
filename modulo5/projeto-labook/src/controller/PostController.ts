import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from "../model/post"

const postBusiness = new PostBusiness()

export class PostController {

    public createPostController = async (req: Request, res: Response) => {
        try {

            const inputCreatePost: PostInputDTO = {
                photo_url: req.body.photo_url,
                description: req.body.description,
                post_type: req.body.post_type
            }

            const token = req.headers.authorization as string

            await postBusiness.createPostBusiness(inputCreatePost, token)

            res.status(200).send({ message: "Post criado com sucesso!" })

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || error.sqlMessage)
        }
    }

    public getPostByIdController = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id: string = req.params.id

            const post = await postBusiness.getPostByIdBusiness(id, token)
            res.status(200).send({ post })

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || error.sqlMessage)
        }
    }
}