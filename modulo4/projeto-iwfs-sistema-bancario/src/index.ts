import express, { Response, Request } from "express"
import { AddressInfo } from "net"
import { users1 } from "./data"

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

const users = users1

app.get("/users", (req: Request, res: Response) => {
    const cpf = req.query.cpf as string
    const name = req.query.name as string

    let errorCode: number = 400

    try {

        if (!cpf) {
            res.status(200).send(users)
        }

        const returnProduct = users.filter((item) => {
            if (cpf && name) {
                return item.cpf === cpf && item.name.toLowerCase() === name.toLowerCase()
            }
            else if (cpf) {
                return item.cpf === cpf
            }
        })

        if (returnProduct.length === 0) {
            errorCode = 404
            throw new Error("CPF não encontrado");
        }

        const retornarValor = returnProduct.map((item) => {
            return `O saldo do(a) ${item.name} é R$ ${item.balance}`
        })
        res.status(200).send(retornarValor)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

app.post("/users", (req: Request, res: Response) => {
    const token = req.headers.authorization
    let errorCode: number = 400

    try {
        const { name, cpf, birthDate, balance } = req.body

        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        if (!name && !cpf && !birthDate) {
            errorCode = 404
            throw new Error("Para realizar o cadastro de um novo usário, é necessário informar todos os campos")
        }

        const validarCaracteresCpf = /[a-zA-Z]/
        const validarFormatacaoCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/

        if (validarCaracteresCpf.test(cpf) || !validarFormatacaoCpf.test(cpf)) {
            errorCode = 401
            throw new Error("O campo CPF deve conter 11 caracteres, do tipo number, formatação");
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf) {
                errorCode = 409
                throw new Error("CPF já cadastrado no nosso banco de dados")
            }
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

app.post("/users/accounts", (req: Request, res: Response) => {

    const token = req.headers.authorization
    const { description, value, cpf } = req.body
    let dueDate = req.body.dueDate 
    let errorCode: number = 400

    try {

        if (!token) {
            errorCode = 404
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        if (!description || !value || !cpf) {
            errorCode = 404
            throw new Error("Para realizar um pagamento, é necessário informar description, value, cpf e dueDate")
        }

        const currentDate = new Date().toLocaleDateString("pt-BR")

        if (!dueDate) {
            dueDate = currentDate
        }         

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf) {
                if (users[i].balance as number >= value) {
                    users[i].extract?.push({
                        value,
                        date: dueDate,
                        description,
                    })
                    res.status(200).send("Pagamento efetuado com sucesso!")
                } else {
                    errorCode = 406
                    throw new Error("Você não possui saldo suficiente para realizar essa operação :(")
                }
            }
        }

    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }
})

app.put("/users/:cpf", (req: Request, res: Response) => {

    const { name, valor } = req.body
    const cpf = req.params.cpf
    const token = req.headers.authorization
    let errorCode: number = 400


    try {
        if (!token) {
            errorCode = 404
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        if (!name || !valor || !cpf) {
            errorCode = 404
            throw new Error("Para realizar um novo depósito, é necessário informar todos os campos, cpf, name e valor")
        }

        let encontraCpf = false

        for (let i = 0; i < users.length; i++) {

            if (users[i].cpf === cpf && users[i].name.toUpperCase() === name.toUpperCase()) {
                users[i].balance = users[i].balance + valor
                users[i].extract?.push({
                    value: valor,
                    date: new Date().toLocaleDateString("pt-BR"),
                    description: "Depósito em dinheiro",
                })
                encontraCpf = true
            }
        }
        if (!encontraCpf) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(`Deposito realizado com sucesso!`)

    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }

})

app.put("/users/balance/:cpf", (req: Request, res: Response) => {
    const cpf = req.params.cpf
    const token = req.headers.authorization
    let extrato
    let saldo: number | undefined
    let errorCode:number = 400

    if (!token) {
        errorCode = 401
        throw new Error("Para realizar essa operação é necesário ter token de autorização")
    }

    if (!cpf) {
        errorCode = 404
        throw new Error("Para realizar a consulta de saldo, é necessário informar todos o cpf")
    }

    try {
        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf){
                   extrato = users[i].extract 
                   saldo = users[i].balance                  
            }
        }

        const retornarSaldo: any = extrato?.map(item => item.value).reduce((anterior, atual) => anterior + atual,0)
       console.log("retornar saldo" ,retornarSaldo)
        const saldoAtualizado = saldo as number - retornarSaldo 
        
        res.status(200).send({saldo: saldoAtualizado})

    } catch  (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
   
})

