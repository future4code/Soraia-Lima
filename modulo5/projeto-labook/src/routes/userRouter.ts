import express from "express";
import { FriendshipController } from "../controller/FriendsController";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const friendshipController = new FriendshipController()
const userController = new UserController()

userRouter.get('/feed', friendshipController.getFeedController)
userRouter.post('/signup', userController.signupController)
userRouter.post('/login', userController.loginController)
userRouter.post('/follow', friendshipController.makeFriendshipBusiness)
userRouter.post('/unfollow', friendshipController.unfriendBusiness)