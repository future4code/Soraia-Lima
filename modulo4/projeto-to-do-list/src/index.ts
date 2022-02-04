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

const criarUsuario = async (name: string, nickname: string, email: string): Promise<void> => {
    const id = Date.now().toString()
    await connection('TodoListUser').insert({
        id,
        name,
        nickname,
        email
    })
}

const buscarUsuario = async (id: string): Promise<any> => {
    const result = await connection('TodoListUser').select('*').where({ id: id })

    if (result.length < 1) {
        return "Usuário não encontrado"
    }
    return result
}

const editarUsuario = async (id: string, name: string, nickname: string, email: string): Promise<void> => {
    await connection('TodoListUser')
        .where({ id: id })
        .update({
            name: name,
            nickname: nickname,
            email: email
        })
}

const corrigirData = (data: string) => {
    let novaData = data.split('/')
    return `${novaData[2]}-${novaData[1]}-${novaData[0]}`
}

const dataAtualFormatada = (dataa:string) => {
    let data: Date = new Date(dataa)
    const dataFormatada:string = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
    return dataFormatada
}

const criarTarefa = async (title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> => {
    const id = Date.now().toString()
    await connection('TodoListTask').insert({
        id,
        title,
        description,
        status: "to do",
        limit_date: limitDate,
        creator_user_id:creatorUserId
    })
}

const buscarTarefas = async (id: string): Promise<any> => {
    const juncaoDeTabelas = await connection.select('*').table('TodoListTask').innerJoin('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id').where('TodoListTask.id', id)

    if (juncaoDeTabelas.length < 1) {
        return "Tarefa não encontrado"
    }

    const result = juncaoDeTabelas.map((item)=>{
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
    return result
}

// 5º Buscar tarefas por id
app.get("/task/:id", async (req: Request, res: Response) => {
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

        const result = await buscarTarefas(id)
        res.status(201).send({ result })
        
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 2º buscar um usuário pelo id
app.get("/user/:id", async (req: Request, res: Response) => {
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

        const result = await buscarUsuario(id)
        res.status(201).send({ result })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 3º editar usuario
app.post("/user/edit/:id", async (req: Request, res: Response) => {
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

        const result = await editarUsuario(id, name, nickname, email)
        res.status(201).send(`"Dados alterados com sucesso!", ${result}`)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }

})


// 1º cadastrar novo usuario 
app.put("/user", async (req: Request, res: Response) => {

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

        const result = await criarUsuario(name, nickname, email)
        res.status(201).send(`Usuário cadastrado com sucesso!`)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 4º criar um tarefa
app.put("/tesk", async (req: Request, res: Response) => {

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
            throw new Error("Para cadastrar um novo usuário é necessário informar title, description, limitDate, creatorUserId.")
        }

        const result = await criarTarefa(title, description, limitDate, creatorUserId)
        res.status(201).send(`Tarefa cadastrada com sucesso!`)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})


