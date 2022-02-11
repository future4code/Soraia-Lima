import connection from "../data/connection"
import { User } from "../types/types"

export const getUser = async (user_id: string): Promise<User[]> => {

    const result = await connection('labecommerce_users')
        .select()
        .where({ id: user_id })

    return result.map((item: User) => {
        return {
            id: item.id,
            name: item.name,
            password: item.password,
            email: item.email
        }
    })

}


