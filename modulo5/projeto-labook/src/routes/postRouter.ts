import express from "express";
import { PostController } from "../controller/PostController";

export const postRouter = express.Router()

const postController = new PostController()

postRouter.get('/:id', postController.getPostByIdController)
postRouter.post('/', postController.createPostController)