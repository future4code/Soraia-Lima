import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../errors/CustomError"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase
    ) { }

    public getUserByIdBusiness = async (id: string) => {

        try {
            const user = await this.userDatabase.getUserById(id)

            if (!user) {
                throw new CustomError(404, "Usuário não encontrado")
            }

            return {
               id: user?.getId(),
               name: user?.getName(),
               email: user?.getEmail(),
               password: user?.getName(),
               role: user?.getRole()
            }

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

}

export default new UserBusiness(
    new UserDatabase()
)