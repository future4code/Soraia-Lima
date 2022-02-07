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

const correctDate = (data: string) => {
    let newDate = data.split('/')
    return `${newDate[2]}-${newDate[1]}-${newDate[0]}`
}

const currentDateFormatted = (data: string) => {
    let newDate: Date = new Date(data)
    const newFormattedDate: string = ((newDate.getDate())) + "/" + ((newDate.getMonth() + 1)) + "/" + newDate.getFullYear()
    return newFormattedDate
}

// 2º 
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
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 6º 
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
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 8º 
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

        const returnUser = await connection.raw(`
            SELECT * FROM TodoListUser WHERE (name LIKE "%${name}%") OR (nickname LIKE "%${name}%") OR (email LIKE "%${name}%")
            `)

        res.status(200).send({ users: returnUser[0] })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 1º 
app.post("/user", async (req: Request, res: Response): Promise<void> => {

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
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 3º 
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
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

        res.status(200).send(`"Dados alterados com sucesso!"`)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }

})

// TASKS 

//10º
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

        const getTasks = await connection('TodoListTask').select('TodoListTask.id', 'TodoListTask.title')

        let foundTask: boolean = false

        for (let i = 0; i < getTasks.length; i++) {
            if (getTasks[i].id === id) {

                const tableJoin = await connection('TodoListTask')
                    .select('TodoListUser.id', 'TodoListUser.nickname')
                    .innerJoin('TodoListResponsibleUserTaskRelation', 'TodoListTask.id', 'TodoListResponsibleUserTaskRelation.task_id')
                    .innerJoin('TodoListUser', 'TodoListResponsibleUserTaskRelation.responsible_user_id', 'TodoListUser.id')
                    .where('TodoListTask.id', id)

                if (tableJoin.length === 0) {
                    res.status(200).send("Essa terefa ainda não possui ninguém responsável por executá-la")
                } else {
                    res.status(200).send({ users: tableJoin })
                }
                foundTask = true
            }
        }

        if (!foundTask) {
            errorCode = 404
            throw new Error("Tarefa não encontrada")
        }

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 5º  e 11º 
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

        const creatorUser = await connection('TodoListTask')
            .select('TodoListTask.id', 'TodoListTask.title', 'TodoListTask.description', 'TodoListTask.limit_date', 'TodoListTask.status', 'TodoListTask.creator_user_id', 'TodoListUser.name')
            .innerJoin('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id')
            .where('TodoListTask.id', id)

        const responsibleUsers = await connection('TodoListTask').select('TodoListUser.id', 'TodoListUser.nickname')
            .leftJoin('TodoListResponsibleUserTaskRelation', 'TodoListTask.id', 'TodoListResponsibleUserTaskRelation.task_id')
            .innerJoin('TodoListUser', 'TodoListUser.id', 'TodoListResponsibleUserTaskRelation.responsible_user_id')
            .where('TodoListTask.id', id)

        if (creatorUser.length < 1) {
            errorCode = 404
            throw new Error("Tarefa não encontrada")
        }

        const result = creatorUser.map((item) => {
            return ({
                taskId: item.id,
                title: item.title,
                description: item.description,
                limitDate: currentDateFormatted(item.limit_date),
                status: item.status,
                creatorUserId: item.creator_user_id,
                creatorUserNickname: item.name,
                responsibleUsers: responsibleUsers
            })
        })

        res.status(200).send({ result })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 7º e 13º 
app.get("/task", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    const id: string = req.query.creatorUserId as string
    const status: string = req.query.status as string
    let errorCode: number = 400

    try {

        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (id) {
            const tableJoin = await connection('TodoListTask')
                .select('TodoListTask.id', 'TodoListTask.title', 'TodoListTask.description', 'TodoListTask.limit_date', 'TodoListTask.status', 'TodoListTask.creator_user_id', 'TodoListUser.name')
                .innerJoin('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id')
                .where('TodoListUser.id', id)

            const result = tableJoin.map((item) => {
                return ({
                    taskId: item.id,
                    title: item.title,
                    description: item.description,
                    limitDate: currentDateFormatted(item.limit_date),
                    status: item.status,
                    creatorUserId: item.creator_user_id,
                    creatorUserNickname: item.name,
                })
            })

            if (result.length === 0) {
                errorCode = 404
                throw new Error("Usuário não encontrado, por gentileza informar um id válido")
            }

            res.status(200).send({ tasks: result })
        }

        if (status) {
            const buscarStatus = await connection('TodoListTask')
                .select()
                .join('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id')
                .where("TodoListTask.status", status)

            const result = buscarStatus.map((item) => {
                return ({
                    taskId: item.id,
                    title: item.title,
                    description: item.description,
                    limitDate: currentDateFormatted(item.limit_date),
                    status: item.status,
                    creatorUserId: item.creator_user_id,
                    creatorUserNickname: item.name
                })
            })

            if (result.length === 0) {
                errorCode = 404
                throw new Error("Nenhuma tarefa encontrada com esse status")
            }

            res.status(200).send({ tasks: result })
        }

        if (!id || !status) {
            errorCode = 404
            throw new Error("Por gentileza, informar id ou status para essa busca.")
        }

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 9º 
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
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 4º 
app.post("/tesk", async (req: Request, res: Response): Promise<void> => {

    const token = req.headers.authorization
    let { title, description, limitDate, creatorUserId }: { title: string, description: string, limitDate: string, creatorUserId: string } = req.body
    let errorCode: number = 400

    limitDate = correctDate(limitDate)

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
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})

// 12º
app.put("/task/status/:id/", async (req: Request, res: Response): Promise<any> => {
    const token = req.headers.authorization
    const id = req.params.id
    const status = req.body.status
    let errorCode: number = 400

    try {

        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!id) {
            errorCode = 404
            throw new Error("Para alterar o status da tarefa é necessário informar um id.")
        }

        if (!status) {
            errorCode = 404
            throw new Error("Para alterar o status da tarefa é necessário informar o novo status para a mesma, entre: 'to do', 'doing', 'done'.")
        }
        const fetchTasks = await connection('TodoListTask').select().update({
            status: status
        }).where({ id: id })

        if (!fetchTasks) {
            errorCode = 404
            throw new Error("Tarefa não encontrada, por gentileza informar um id válido")
        }

        res.status(200).send("Status da tarefa alterado com sucesso")

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
})