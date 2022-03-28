import { UserDatabse } from "../data/UserDatabese";
import { User } from "../entites/User";
import { Authentication } from "../services/Authentication";
import { GenerateId } from "../services/generateId";
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../types/types";

const userDatabese = new UserDatabse()
const generateId = GenerateId()
const authentication = new Authentication()
const hashManager = new HashManager()

export class UserBusinnes {

    public signup = async (name: string, email: string, password: string, role: USER_ROLES): Promise<string> => {

        if (!name || !email || !password || !role) {
            throw new Error("Para realizar o cadastro de um novo usuário é necessário informar os seguintes campos: name, email, password, role.")
        }

        if (!email.includes('@') || !email.includes('.com')) {
            throw new Error("Formato de email inválido")
        }

        const id: string = generateId

        const encryptedPassword = await hashManager.genareHash(password)

        const newUser = new User(id, name, email, encryptedPassword, role)

        await userDatabese.createUser(newUser)

        const token = authentication.generateToken({ id, role })

        return token
    }

    public login = async (email: string, password: string): Promise<string> => {

        if (!email || !password) {
            throw new Error("Para realizar login é necessário informar os seguintes campos:  email, password.")
        }

        const user = await userDatabese.getUserbyEmail(email)

        if (!user) {
            throw new Error("Esse usuáro não existe, por gentileza informar um email válido")
        }

        const passwordIsCorrect: boolean = user && await hashManager.compareHash(password, user.getPassword())

        if (!password || !passwordIsCorrect) {
            throw new Error("Password inválido.")
        }

        const token = authentication.generateToken({ id: user.getId(), role: user.getRole() })
        return token
    }

    public getAllUsers = async (token: string): Promise<any[]> => {

        if (!token) {
            throw new Error("Para realizar essa operação é necessário ter token de autorização.")
        }

        authentication.getTokenData(token)

        const users = await userDatabese.getUsers()

        return users
    }

    public deleteUser = async (token: string, id: string): Promise<void> => {
        if (!token) {
            throw new Error("Para realizar essa operação é necessário ter token de autorização.")
        }
        const verifyToken = authentication.getTokenData(token)

        const user = await userDatabese.getUserbyId(verifyToken.id)

        const userRole = user.getRole()

        if (userRole !== "ADMIN") {
            throw new Error("Somente usuários com perfil de ADMIN podem realizar essa requisição");
        }

        await userDatabese.deleteUserById(id)
    }
}