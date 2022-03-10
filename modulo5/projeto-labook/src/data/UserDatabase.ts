import { User } from "../model/user";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    protected TABLE_NAME = 'Labook_User'

    public insertUser = async (user: User) => {
        await BaseDatabase.connection(this.TABLE_NAME)
            .insert(user)
    }

    public getUserByEmail = async (email: string) => {
        const [user] = await BaseDatabase.connection(this.TABLE_NAME)
            .select()
            .where({ email })

        const newUser = user && User.toUserModel(user)
        return newUser
    }

    public getUserById = async (id: string) => {
        const [user] = await BaseDatabase.connection(this.TABLE_NAME)
            .select()
            .where({ id })

        const newUser = user && User.toUserModel(user)
        return newUser
    }

}