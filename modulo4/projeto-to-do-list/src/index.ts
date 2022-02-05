import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

const corrigirData = (data: string) => {
    let novaData = data.split('/')
    return `${novaData[2]}-${novaData[1]}-${novaData[0]}`
}

const dataAtualFormatada = (dataa: string) => {
    let data: Date = new Date(dataa)
    const dataFormatada: string = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
    return dataFormatada
}

//10º Pegar usuário responsavéis por uma tarefa
app.get("/task/:id/responsible", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    const id: string = req.params.id
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!id) {
            errorCode = 404
            throw new Error("Para buscar usuários responsavéis por um tarefa é necessário informar um id.")
        }

        const pegarTodasTarefas = await connection('TodoListTask').select('TodoListTask.id', 'TodoListTask.title')

        let achouTarefa: boolean = false
        for (let i = 0; i < pegarTodasTarefas.length; i++) {

            if (pegarTodasTarefas[i].id === id) {

                const juncaoDeTabela = await connection('TodoListTask').select('TodoListUser.id', 'TodoListUser.nickname').innerJoin('TodoListResponsibleUserTaskRelation', 'TodoListTask.id', 'TodoListResponsibleUserTaskRelation.task_id').innerJoin('TodoListUser', 'TodoListResponsibleUserTaskRelation.responsible_user_id', 'TodoListUser.id').where('TodoListTask.id', id)

                if (juncaoDeTabela.length === 0) {
                    res.status(200).send("Essa terefa ainda não possui ninguém responsável por executá-la")
                } else {
                    res.status(200).send({ users: juncaoDeTabela })
                }
                achouTarefa = true
            }
        }

        if (!achouTarefa) {
            errorCode = 404
            throw new Error("Tarefa não encontrada")
        }

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 6º Buscar todos os usuários
app.get("/user/all", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        const result = await connection("TodoListUser").select('*')
        res.status(200).send({ users: result })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 8º Buscar um usuario através da query
app.get("/user", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    const name: string = req.query.query as string
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }
        if (!name) {
            errorCode = 404
            throw new Error("Para buscar por um usuário em especifico é necessário informar a query.")
        }

        const retornarTabelas = await connection.raw(`
            SELECT * FROM TodoListUser WHERE (name LIKE "%${name}%") OR (nickname LIKE "%${name}%") OR (email LIKE "%${name}%")
            `)

        res.status(200).send({ users: retornarTabelas[0] })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 7º Buscar tarefas de um ID especifico
app.get("/task", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    const id: string = req.query.creatorUserId as string
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }
        if (!id) {
            errorCode = 404
            throw new Error("Para buscar as tarefas de um usuário em especifico é necessário informar o id do mesmo.")
        }

        const buscarTodosUsuario = await connection('TodoListUser').select()

        let achouUsuario: boolean = false
        for (let i = 0; i < buscarTodosUsuario.length; i++) {

            if (buscarTodosUsuario[i].id === id) {
                const juncaoDeTabela = await connection('TodoListTask')
                    .select('TodoListTask.id', 'TodoListTask.title', 'TodoListTask.description', 'TodoListTask.limit_date', 'TodoListTask.status', 'TodoListTask.creator_user_id', 'TodoListUser.name')
                    .innerJoin('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id')
                    .where('TodoListUser.id', id)

                const result = juncaoDeTabela.map((item) => {
                    return ({
                        taskId: item.id,
                        title: item.title,
                        description: item.description,
                        limitDate: dataAtualFormatada(item.limit_date),
                        creatorUserId: item.creator_user_id,
                        status: item.status,
                        creatorUserNickname: item.name
                    })
                })

                res.status(200).send({ tasks: result })
                achouUsuario = true
            }
        }

        if (!achouUsuario) {
            errorCode = 404
            throw new Error("Usuário não encontrado, por gentileza informar um id válido")
        }

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 5º Buscar tarefas por id
app.get("/task/:id", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    const id: string = req.params.id
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!id) {
            errorCode = 404
            throw new Error("Para buscar um usuário é necessário informar um id.")
        }

        const juncaoDeTabelas = await connection('TodoListTask')
            .select('TodoListTask.id', 'TodoListTask.title', 'TodoListTask.description', 'TodoListTask.limit_date', 'TodoListTask.status', 'TodoListTask.creator_user_id', 'TodoListUser.name')
            .innerJoin('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id')
            .where('TodoListTask.id', id)

        if (juncaoDeTabelas.length < 1) {
            errorCode = 404
            throw new Error("Tarefa não encontrada")
        }

        const result = juncaoDeTabelas.map((item) => {
            return ({
                taskId: item.id,
                title: item.title,
                description: item.description,
                limitDate: dataAtualFormatada(item.limit_date),
                status: item.status,
                creatorUserId: item.creator_user_id,
                creatorUserNickname: item.name
            })
        })

        res.status(200).send({ result })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 2º buscar um usuário pelo id
app.get("/user/:id", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    const id: string = req.params.id
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!id) {
            errorCode = 404
            throw new Error("Para buscar um usuário é necessário informar um id.")
        }

        const result = await connection('TodoListUser').select('*').where({ id: id })

        if (result.length < 1) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        res.status(201).send({ result })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 3º editar usuario
app.post("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    const token = req.headers.authorization
    const id: string = req.params.id
    const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body

    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!id) {
            errorCode = 404
            throw new Error("Para alterar poder alterar os dados do usuário é necessário informar um id.")
        }

        if (name?.length < 3 || nickname?.length < 3 || email?.length < 10) {
            errorCode = 404
            throw new Error("Paramêtros em branco não podem ser alterados")
        }

        await connection('TodoListUser')
            .where({ id: id })
            .update({
                name: name,
                nickname: nickname,
                email: email
            })

        res.status(201).send(`"Dados alterados com sucesso!"`)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }

})

// 9º  Atribuir um usuário responsável a uma tarefa
app.post("/task/responsible", async (req: Request, res: Response) => {
    const token = req.headers.authorization
    const { task_id, responsible_user_id }: { task_id: string, responsible_user_id: string } = req.body
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        if (!task_id || !responsible_user_id) {
            errorCode = 404
            throw new Error("Para atribuir um usuário a um tarefas em específico é necessário informar task_id e responsible_user_id.")
        }

        await connection('TodoListResponsibleUserTaskRelation').insert({
            task_id,
            responsible_user_id
        })

        res.status(200).send("Usuário atribuido a tarefa com sucesso!")

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})


// 1º cadastrar novo usuario 
app.put("/user", async (req: Request, res: Response): Promise<void> => {

    const token = req.headers.authorization
    const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body
    let errorCode: number = 400

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        if (!name || !nickname || !email) {
            errorCode = 404
            throw new Error("Para cadastrar um novo usuário é necessário informar name, nickname e email.")
        }

        const id = Date.now().toString()
        await connection('TodoListUser').insert({
            id,
            name,
            nickname,
            email
        })

        res.status(201).send(`Usuário cadastrado com sucesso!`)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 4º criar um tarefa
app.put("/tesk", async (req: Request, res: Response): Promise<void> => {

    const token = req.headers.authorization
    let { title, description, limitDate, creatorUserId }: { title: string, description: string, limitDate: string, creatorUserId: string } = req.body
    let errorCode: number = 400

    limitDate = corrigirData(limitDate)

    try {
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necesário ter token de autorização")
        }

        if (!title || !description || !limitDate || !creatorUserId) {
            errorCode = 404
            throw new Error("Para criar uma nova tarefa é necessário informar title, description, limitDate, creatorUserId.")
        }

        const id = Date.now().toString()
        await connection('TodoListTask').insert({
            id,
            title,
            description,
            status: "to do",
            limit_date: limitDate,
            creator_user_id: creatorUserId
        })

        res.status(201).send(`Tarefa cadastrada com sucesso!`)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})


