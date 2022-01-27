import express, { Request, Response } from "express"
import { AddressInfo } from "net"
import { users } from "./data"

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

// deixei essas duas string por fora, porque uso em várias requisições
const normal: string = "NORMAL"
const admin: string = "ADMIN"

// exercício1 -  a) get - b) "/users"

app.get("/users", (req: Request, res: Response) => {
    try {
        res.status(200).send({ users })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// exercício 2
// a) passei como QueryParams, pois se colocasse como params, não consegui fazer a validação se le viesse vazio.
// b) Coloquei uma condicional para recerber apenas os nomes normal e admin, mas não consegui fazer ele não aceitar o types vázio.

app.get("/users/type", (req: Request, res: Response) => {

    try {
        const type: string = req.query.type as string

        if (type !== normal.toLowerCase() && type !== admin.toLowerCase() && !type) {
            throw new Error("Por gentileza, informar um type válido")

        } else {
            const user = users.filter((user) => {
                return user.type.toLowerCase() === type.toLowerCase()
            })
            res.status(200).send(user)
        }

    } catch (error: any) {
        switch (error.message) {
            case "Por gentileza, informar um type válido":
                res.status(401)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// exercício 3
// a) normalmente usamos query.

app.get("/users/name", (req: Request, res: Response) => {

    const name: string = req.query.name as string

    try {
        if (!name) {
            throw new Error("Nenhum usuário encontrado, por gentileza informar um name válido")
        }
        const user = users.filter((user) => {
            return user.name.toLowerCase() === name.toLowerCase()
        })

        res.status(200).send(user)

    } catch (error: any) {
        switch (error.message) {
            case "Nenhum usuário encontrado, por gentileza informar um name válido":
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// exercício 4
// a) Quando eu mudei para o put não mudou nada. 
// b) Não, pois o método put, seria para alterar algo e não para criar. Usando dessa maneira fica semanticamente incorreto.

app.post("/users", (req: Request, res: Response) => {
    const token = req.headers.authorization
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necesário ter token de autorização");
        }

        const { name, email, type, age } = req.body

        users.push({
            id: Date.now(),
            name,
            email,
            type,
            age
        })

        if (!name || !email || !type || !age) {
            errorCode = 404
            throw new Error("Para realizar o cadastro de um novo usário, é necessário informar todos os campos")
        }

        if (typeof name !== "string" && typeof email !== "string" && typeof type !== "string") {
            errorCode = 422
            throw new Error("Por getileza, informar os campos name, email e type como string")
        }

        if (type !== normal && type !== admin) {
            errorCode = 422
            throw new Error("O type deve ser informado como ADMIN OU NORMAL");
        }

        if (typeof age !== "number") {
            errorCode = 422
            throw new Error("Por getileza, informar o campo age como number");
        }

        res.status(201).send("Usuário criado com sucesso")

    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }
})

// desafio
//exercício 5
app.put("/users", (req: Request, res: Response) => {

    const token = req.headers.authorization
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 404
            throw new Error("Para realizar essa operação é necesário ter token de autorização");
        }

        for (let i = 0; i < users.length; i++) {
            let last = users[users.length - 1]
            if (users[i].id === last.id) {
                users[i].name = `${users[i].name} - ALTERADO`
            }
        }
        res.status(200).send()

    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }
})

// exercício 6
app.patch("/users", (req: Request, res: Response) => {

    const token = req.headers.authorization
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 404
            throw new Error("Para realizar essa operação é necesário ter token de autorização");
        }

        for (let i = 0; i < users.length; i++) {
            let last = users[users.length - 1]
            if (users[i].id === last.id) {
                if (users[i].name.includes("- ALTERADO")) {
                    users[i].name = users[i].name.replace("- ALTERADO", "- REALTERADO")
                    res.status(200).send()
                }
                else {
                    res.status(405).send("Nenhum dado a ser alterado")
                }
            }
        }
    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }
})

// exercício 7
app.delete("/users/:userId", (req: Request, res: Response) => {

    const token = req.headers.authorization
    const id = Number(req.params.userId)
    let errorCode: number = 400
    let isId = false

    try {
        if (!token) {
            errorCode = 404
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        for (let i = 0; i < users.length; i++) {
            let index = users.findIndex((item) => item.id === id)
            if (index > -1) {
                users.splice(index, 1)
                isId = true
            }
        }

        if (!isId) {
            errorCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send({ users })

    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }

})