import express, { Request, Response } from "express";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// exercício 1
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong")
})

// exercicio 2

type AFazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// exercício 3
const tarefas: AFazer[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "estudar",
        "completed": true
    },
    {
        "userId": 1,
        "id": 2,
        "title": "revisar",
        "completed": false
    }, {
        "userId": 2,
        "id": 3,
        "title": "cozinhar",
        "completed": true
    },
    {
        "userId": 2,
        "id": 4,
        "title": "lavar o banheiro",
        "completed": false
    },
    {
        "userId": 3,
        "id": 5,
        "title": "passar roupas",
        "completed": true
    },
    {
        "userId": 3,
        "id": 6,
        "title": "dar banho no cachorro",
        "completed": false
    },
    {
        "userId": 4,
        "id": 7,
        "title": "limpar a casa",
        "completed": true
    },
    {
        "userId": 4,
        "id": 8,
        "title": "passear",
        "completed": false
    },
]

// exercício 5
app.post("/tarefas", (req: Request, res: Response) => {

    const idAdd = Number(req.headers.authorization)
    const { title} = req.body

    if(!idAdd){res.status(400).send("ID inválido")}

    tarefas.push({
        userId: idAdd,
        id: Date.now(),
        title,
        completed: false
    })
    res.status(200).send({tarefas})
})

// exercício 6
app.put("/tarefas", (req: Request, res: Response) =>{
    const id = Number(req.query.id)
   
    if(!id){res.status(400).send("ID inválido")}
    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].id === id){
            tarefas[i].completed = !tarefas[i].completed
        }
    }

    res.status(200).send({tarefas})
})

// exercício 7
app.delete("/tarefas", (req: Request, res: Response) => {
    const id = Number(req.query.id)

    if(!id){res.status(400).send("ID inválido")}

     for(let i = 0; i < tarefas.length; i++){
        let index = tarefas.findIndex( (item) => item.id === id)
        if (index > -1) {
            tarefas.splice(index, 1)
        }
     }
    res.status(200).send({tarefas})
})

// exercicio 4
app.get("/tarefas/:status", (req: Request, res: Response) => {
    const status = req.params.status
    let statusResult: boolean

    if(status === "true") {
        statusResult = true
    }else if (status === "false"){
        statusResult = false
    }else{
        res.status(400).send("Status inválido")
    }

    const tarefasFiltradas = tarefas.filter((tarefa) => {
        return tarefa.completed === statusResult
    
    })
    res.status(200).send(tarefasFiltradas)
})

// exercício 8
app.get("/tarefas/:userId", (req: Request, res: Response) => {
    const idUser = Number(req.params.userId)
    if(!idUser){res.status(400).send("Usuário inválido")}

    const retornarUsuario = tarefas.filter((item) =>{
        if(item.userId === idUser){
            return item
        }
    })   
    res.status(200).send(retornarUsuario)
})