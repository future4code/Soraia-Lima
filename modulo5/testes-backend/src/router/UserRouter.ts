import express from "express";
import UserController from "../controller/UserController";

export const userRouter = express.Router();

userRouter.get("/profile/:id", UserController.getUserById);