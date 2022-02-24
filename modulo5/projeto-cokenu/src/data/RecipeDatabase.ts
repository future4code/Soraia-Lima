import { Recipe } from "../entities/Recipe"
import { BaseDatebase } from "./BaseDatebase"

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
}