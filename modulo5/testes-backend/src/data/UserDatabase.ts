import { User } from "../model/User";
import { BaseDatebase } from "./BaseDatabase";

export class UserDatabase extends BaseDatebase {

    //protected TABLE_NAME = 'User_Arq'

    public getUserById = async (id: string): Promise<User | undefined> => {
        
        try {
            
            const [user] = await BaseDatebase.connection('User_Arq')
                .select()
                .where({ id })

            const newUser = user && User.toUserModel(user)
            return newUser

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)

        }
    }

}