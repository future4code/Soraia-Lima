import { Request, Response } from "express";
import { UserBusinnes } from "../businnes/UserBusinnes";
import { USER_ROLES } from "../types/types";

const userBusinnes = new UserBusinnes()

export class UserController {

    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role }: { name: string, email: string, password: string, role: USER_ROLES } = req.body

            const token = await userBusinnes.signup(name, email, password, role)

            res.status(201).send({ message: "Novo usuário cadastrado com sucesso!", token })

        } catch (error: any) {
            switch (error.message) {
                case "Para realizar o cadastro de um novo usuário é necessário informar os seguintes campos: name, email, password, role.":
                    res.statusCode = 422
                    break
                case "Formato de email inválido":
                    res.statusCode = 422
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }
            res.send(error.message)
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password }: { email: string, password: string } = req.body
            const token = await userBusinnes.login(email, password)

            res.status(200).send({ message: "Usuário logado com sucesso!", token })

        } catch (error: any) {
            switch (error.message) {
                case "Para realizar login é necessário informar os seguintes campos:  email, password.":
                    res.statusCode = 422
                    break
                case "Esse usuáro não existe, por gentileza informar um email válido":
                    res.statusCode = 401
                    break
                case "Password inválido.":
                    res.statusCode = 401
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }
            res.send(error.message)
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const users = await userBusinnes.getAllUsers(token)

            res.status(200).send(users)

        } catch (error: any) {
            switch (error.message) {
                case "Para realizar essa operação é necessário ter token de autorização.":
                    res.statusCode = 401
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }
            res.send(error.message)
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            await userBusinnes.deleteUser(token, id)

            res.status(200).send({message: "Usuário deletado com sucesso!"})

        } catch (error: any) {
            switch (error.message) {
                case "Para realizar essa operação é necessário ter token de autorização.":
                    res.statusCode = 401
                    break
                case "Somente usuários com perfil de ADMIN podem realizar essa requisição":
                    res.statusCode = 401
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }
            res.send(error.message)
        }
    }
}