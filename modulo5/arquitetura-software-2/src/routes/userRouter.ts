import express from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/authenticator'
import { idGenerator } from '../services/generateId'
import { HashManager } from '../services/hashManager'

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new Authenticator(),
        new idGenerator()
    )
)

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)