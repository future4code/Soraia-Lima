import { Request, Response } from 'express'
import { RecipeDatabase } from '../data/RecipeDatabase'
import { UserDatabase } from '../data/UserDatabase'
import { Authentication } from '../services/Authentication'
import { CorrectDate } from '../services/CorrectDate'

export const feed = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string

    try {

        if (!token) {
            res.status(401).send("Para realizar essa operação é necessário ter token de autorização")
        }

        const authentication = new Authentication()
        const verifyToken = authentication.getTokenData(token)

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserById(verifyToken.id, res)
        const userId = user.getId()

        const recipeDatabase = new RecipeDatabase
        const recipe = await recipeDatabase.getFeed(userId, res)

        const correctDate = new CorrectDate()

        // const result = recipe.map((item: any) => {
        //     return ({
        //         id: recipe.id,
        //         title: recipe.title,
        //         description: recipe.description,
        //         cratedAt: correctDate.currentDateFormatted(recipe.creation_date)
        //     })
        // })


        res.status(200).send({ recipe })


    } catch (error: any) {
        res.status(400).send(error.message)
    }
}