import { UserDatabase } from "../data/UserDatabase"
import { signupInputDTO, userData } from "../model/user";
import {user} from '../model/user'
import { HashManager } from "../services/hashManager";
import { Authenticator } from "../services/authenticator";
import { idGenerator } from "../services/generateId";


export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private hashManager:HashManager,
        private authenticator:Authenticator,
        private idGenerator: idGenerator
    ) { }

    public loginBusiness = async (email: string, password: string) => {

        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user1: user = await this.userDatabase.selectUserByEmail(email)

        if (!user1) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = user1 && await this.hashManager.compare(password, user1.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = this.authenticator.generateToken({
            id: user1.id,
            role: user1.role
        })

        return token
    }

    public  signupBusiness = async (userData: signupInputDTO): Promise<string> => {
        if (
           !userData.name ||
           !userData.nickname ||
           !userData.email ||
           !userData.password ||
           !userData.role
        ) {
           throw new Error('Preencha os campos "name","nickname", "email","password" e "role"')
        }
     
        const cypherPassword = await this.hashManager.hash(userData.password);
     
        const newUser = {
            id: this.idGenerator.generateId(),
            name: userData.name,
            nickname: userData.nickname,
            email: userData.email,
            password: cypherPassword,
            role: userData.role           
        }
     
        await this.userDatabase.insertUser(newUser)
     
        const token: string = this.authenticator.generateToken({
           id: newUser.id,
           role: userData.role
        })
     
        return token
     
     }
}