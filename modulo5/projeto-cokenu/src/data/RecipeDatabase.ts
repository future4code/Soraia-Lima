import { Recipe } from "../entities/Recipe"
import { BaseDatebase } from "./BaseDatebase"
import { Response } from "express"
import { CorrectDate } from "../services/CorrectDate"
import { Feed } from "../types/types"

export class RecipeDatabase extends BaseDatebase {

    public registerRecipe = async (recipe: Recipe): Promise<void> => {
        try {
            await BaseDatebase.connection('Cokenu_Recipes')
                .insert({
                    id: recipe.getId(),
                    user_id: recipe.getUserId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    creation_date: recipe.getDate()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getRecipeById = async (id: string): Promise<Recipe> => {
        try {
            const [recipe] = await BaseDatebase.connection('Cokenu_Recipes')
                .select()
                .where('Cokenu_Recipes.id', `${id}`)

            const newRecipe = recipe && Recipe.toRecipeModel(recipe)
            return newRecipe

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getFeed = async (id: string, res?: Response): Promise<Feed[]> => {

        try {

            const recipe = await BaseDatebase.connection('Cokenu_Fllowers ')
                .select('Cokenu_Recipes.id', 'title', 'description', ' creation_date', 'Cokenu_Recipes.user_id', 'Cokenu_User.name')
                .innerJoin('Cokenu_Recipes', 'Cokenu_Fllowers.followed_id', 'Cokenu_Recipes.user_id')
                .innerJoin('Cokenu_User', 'Cokenu_User.id', 'Cokenu_Fllowers.followed_id')
                .where('follower_id', `${id}`)

            if (recipe.length < 1) {
                res?.status(404).send({ message: "Você ainda não segue ninguém, ou as pessoas que você segue ainda não postaram nenhuma receita :(" })
                throw new Error()
            }

            const correctDate = new CorrectDate()

            const result: any = recipe.map((item: Feed) =>{
                return ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    cratedAt: correctDate.currentDateFormatted(item.creation_date),
                    userId: item.user_id,
                    userName: item.name
                })
            })

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}