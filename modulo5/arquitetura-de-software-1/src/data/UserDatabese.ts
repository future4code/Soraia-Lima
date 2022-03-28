import { User } from "../entites/User";
import { BaseDatebase } from "./BaseDatabase";

export class UserDatabse extends BaseDatebase {

    public createUser = async (user: User): Promise<void> => {
        await BaseDatebase.connection('User_Arq')
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
    }

    public getUserbyEmail = async (email: string): Promise<User> => {
        try {
            const [user] = await BaseDatebase.connection('User_Arq')
                .select()
                .where('User_Arq.email', `${email}`)

            const newUser = user && User.toUserModel(user)
            return newUser

        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }

    public getUsers = async (): Promise<User[]> => {
        try {
            const users: User[] = []
            const result = await BaseDatebase.connection('User_Arq')
                .select()

            for (let user of result) {
                users.push(user)
            }

            return users

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public deleteUserById = async (id: string): Promise<void> => {

        try {
            await BaseDatebase.connection('User_Arq')
                .delete()
                .where('User_Arq.id', `${id}`)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getUserbyId = async (id: string): Promise<User> => {
        try {
            const [user] = await BaseDatebase.connection('User_Arq')
                .select()
                .where('User_Arq.id', `${id}`)

            const newUser = user && User.toUserModel(user)
            return newUser

        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }

}