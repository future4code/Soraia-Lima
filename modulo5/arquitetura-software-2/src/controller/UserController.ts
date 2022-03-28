import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { signupInputDTO } from "../model/user";

export class UserController {

    constructor(
        private userBusiness: UserBusiness
    ){}
    
    public signup = async (req: Request, res: Response): Promise<void> => {
        
        try {
            const input: signupInputDTO = {
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }
        
            const token: string = await this.userBusiness.signupBusiness(input)

            res.status(201).send({ message: "Usuário criado!", token })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body
            console.log("Aqui")

            const token: string = await this.userBusiness.loginBusiness(email, password)

            res.send({ message: "Usuário logado!", token })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}