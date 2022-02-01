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

// pegar todas as contas
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
            throw new Error("Usuário não encontrado")
        }

        const returnValue = returnProduct.map((item) => {
            return `O saldo do(a) ${item.name} é R$ ${item.balance}`
        })
        res.status(200).send(returnValue)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// adicionar clientes
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

        const validateCharacterCpf = /[a-zA-Z]/
        const validateFormattingCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/

        if (validateCharacterCpf.test(cpf) || !validateFormattingCpf.test(cpf)) {
            errorCode = 401
            throw new Error("O campo CPF deve ser uma string, contendo 11 caracteres, do tipo number, formatação: '000.000.000-00' ");
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf) {
                errorCode = 409
                throw new Error("CPF já cadastrado no nosso banco de dados")
            }
        }

        const informedBirth: string[] = birthDate.split('/')
        const newDateBirth = new Date(Number(informedBirth[2]), Number(informedBirth[1]) - 1, Number(informedBirth[0])).getTime()
        const currentDate = new Date().getTime()
        const age: number = Math.floor((currentDate - newDateBirth) / 1000 / 60 / 60 / 24 / 365)

        if (age >= 18) {
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

// pagar contas
app.post("/users/accounts", (req: Request, res: Response) => {

    const token = req.headers.authorization
    const { description, value, cpf } = req.body
    let dueDate = req.body.date
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

        if (dueDate < currentDate) {
            errorCode = 404
            throw new Error("A data de pagamento não pode ser uma data que já passou ")
        }

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

// fazer depósito
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

        let findCpf = false

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf && users[i].name.toUpperCase() === name.toUpperCase()) {
                users[i].balance = users[i].balance + valor
                users[i].extract?.push({
                    value: valor,
                    date: new Date().toLocaleDateString("pt-BR"),
                    description: "Depósito em dinheiro",
                })
                findCpf = true
            }
        }

        if (!findCpf) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(`Deposito realizado com sucesso!`)

    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }
})

// atualizar saldo
app.put("/users/balance/:cpf", (req: Request, res: Response) => {
    const cpf = req.params.cpf
    const token = req.headers.authorization
    let bankStatement // extrato
    let bankBalance: number | undefined  // saldo
    let updatedBalance // saldo atualizado
    let errorCode: number = 400

    if (!token) {
        errorCode = 401
        throw new Error("Para realizar essa operação é necesário ter token de autorização")
    }

    if (!cpf) {
        errorCode = 404
        throw new Error("Para realizar a consulta de saldo, é necessário informar todos o cpf")
    }

    const currentDate = new Date().toLocaleDateString("pt-BR")

    try {
        for (let h = 0; h < users.length; h++) {
            if (users[h].cpf === cpf) {
                bankStatement = users[h].extract
                bankBalance = users[h].balance
            }
        }

        let returnBalance
        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf) {
                returnBalance = bankStatement?.filter((item) => {
                    if (item.description !== "Depósito em dinheiro" && item.date < currentDate) {
                        return item.value
                    }
                })
            }
        }

        let contasPagas: any = returnBalance?.map(item => item.value).reduce((prev, curr) => prev + curr, 0)
        updatedBalance = bankBalance as number - contasPagas

        for (let j = 0; j < users.length; j++) {
            if (users[j].cpf === cpf) {
                users[j].balance = updatedBalance
            }
        }

        res.status(200).send({ saldo: `R$ ${updatedBalance}` })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// realizar transferencia
app.post("/users/transfer", (req: Request, res: Response) => {
    const token = req.headers.authorization

    const myName: string = req.body.myName
    const myCpf: string = req.body.myCpf
    const recipientName: string = req.body.recipientName
    const recipientCpf: string = req.body.recipientCpf
    const recipientValue: number = req.body.recipientValue

    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 404
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        if (!myCpf && !myName && !recipientCpf && !recipientName && !recipientValue) {
            errorCode = 404
            throw new Error("Para realizar uma transferência, é necessário informar seu CPF e nome; CPF, nome do destinatário e valor a ser transferido")
        }

        let foundName: boolean = false
        let availableValue = false

        for (let i = 0; i < users.length; i++) {
            if (users[i].name === myName && users[i].cpf === myCpf) {
                if (users[i].balance as number >= recipientValue) {

                    for (let j = 0; j < users.length; j++) {
                        if (users[j].name === recipientName && users[j].cpf === recipientCpf) {
                            users[j].balance = users[j].balance as number + recipientValue
                            users[j].extract?.push({
                                value: recipientValue,
                                date: new Date().toLocaleDateString("pt-BR"),
                                description: `Trasnferência recebida de ${users[i].name}`
                            })
                            foundName = true
                        }
                    }

                    users[i].balance = users[i].balance as number - recipientValue
                    users[i].extract?.push({
                        value: recipientValue,
                        date: new Date().toLocaleDateString("pt-BR"),
                        description: "Trasnferência enviada"
                    })
                    availableValue = true
                }
            }
        }

        if (!availableValue) {
            errorCode = 404
            throw new Error("Você não possui saldo suficiente para essa operação")
        }

        if (!foundName) {
            errorCode = 404
            throw new Error("Dados das contas incorretas, por gentileza, verificar e refazer a operação")
        }

        res.status(200).send("Transferência realizada com sucesso!")

    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message })
    }
})
