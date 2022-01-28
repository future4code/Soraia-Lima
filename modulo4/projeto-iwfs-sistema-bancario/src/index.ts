import express, { Response, Request } from "express"
import { AddressInfo } from "net"
import { Users } from "./data"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

const users = Users

app.get("/users", (req: Request, res: Response) => {
    try {
        
    //     const ajustaPreco = (preco: number): string => {
    //         let valorAjustado: string = preco.toFixed(2).replace('.', ',')
    //         return "R$ " + valorAjustado
    //     }
    // const users2 = users.map((item) =>{
    //     item.balance = ajustaPreco(item.balance as number)
    //     return item
    // })
            
       
        

        res.status(200).send(users)
        
    } catch (error) {
        res.status(400).send()
    }
})

app.post("/users", (req: Request, res: Response) => {
    const token = req.headers.authorization
    let errorCode: number = 400

    try {
        const { name, cpf, birthDate, balance } = req.body

        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necesário ter token de autorização");
        }

        if (!name && !cpf && !birthDate) {
            errorCode = 404
            throw new Error("Para realizar o cadastro de um novo usário, é necessário informar todos os campos")
        }

        const nascimentoStrArr: string[] = birthDate.split('/')
        const nascimentoDate = new Date(Number(nascimentoStrArr[2]), Number(nascimentoStrArr[1]) - 1, Number(nascimentoStrArr[0])).getTime()
        const dataAtual = new Date().getTime()
        const idade: number = Math.floor((dataAtual - nascimentoDate) / 1000 / 60 / 60 / 24 / 365)

        if (idade >= 18) {
            users.push({
                id: Date.now(),
                name,
                cpf,
                birthDate,
                balance,
                extract: []
            })
            res.status(201).send("Conta criada com sucesso!")

        } else {
            errorCode = 422
            throw new Error("O usuário deve ter pelo menos 18 anos, para poder abrir uma conta.");
        }

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})





