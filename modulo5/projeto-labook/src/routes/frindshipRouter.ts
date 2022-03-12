import express from "express";
import { FriendshipController } from "../controller/FriendsController";

export const frienshipRouter = express.Router()

const friendshipController = new FriendshipController()

frienshipRouter.post('/follow', friendshipController.makeFriendshipBusiness)
