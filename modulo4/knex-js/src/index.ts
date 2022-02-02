import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { isObjectLiteralElementLike } from "typescript";
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
});;

// exercicio 1
// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `)

//     return result[0][0]
// }

// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         console.log(await getActorById(id))

//         res.end()
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })

// exercicio 1 - b 
const buscarAtorPorNome = async (nome: string): Promise<any> => {
    const resultado = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${nome}'
    `)
    return resultado[0][0]
}

// app.get("/usersss/:gender", async (req: Request, res: Response) => {
//     try {
//         // const name = req.params.name
//         // const resposta = await buscarAtorPorNome(name)
    
//         res.status(200).send({message: resposta})
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })

// exercicio 1 - c
const retornarGender = async (gender: string): Promise<any> => {
    const resultado = await connection.raw(`
    SELECT COUNT(*) as cont FROM Actor WHERE gender = "${gender}"
    `);
    const count = resultado[0][0];
    return count;
};

// app.get("/users/:gender", async (req: Request, res: Response) => {
//     try{
//         const gender = req.params.gender
//         const resposta = await retornarGender(gender)
    
//         res.status(200).send({message: resposta})
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })

// exercicio 2 - a
const atualizarSalario = async (id: string, salary:number): Promise<void> => {
    await connection.where({id: id})
    .update({ salary: salary})
    .into("Actor");
} 

// app.put("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         const salary = req.body.salary

//         const resposta = await atualizarSalario(id,salary)
    
//         res.status(200).send({message: `Salario atualizado. ${resposta}`})
        
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// }) 
 
// b) 
const deletarAtor = async (id:string):Promise<void> => {
    await connection("Actor").where({id: id}).del()
}
// app.delete("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         const resposta = await deletarAtor(id)

//         res.status(200).send({message: `Ator deletado. ${resposta}`})

//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })

// c)
const retornarGender2 =async (gender: string):Promise<any> => {
    const result = await connection("Actor").avg("salary").where({gender});
    return result[0]
}

// app.get("/users/:gender", async (req: Request, res: Response) => {
//     try{
//         const gender = req.params.gender
//         const resposta = await retornarGender2(gender)
    
//         res.status(200).send({message: resposta})
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error aaaaaaaaaaa")
//     }
// })

// exercicio 3

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  
  //a
app.get("/actor/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const resposta = await retornarGender(id)
    
        res.status(200).send({message: resposta})
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//b
app.get("/actor", async (req: Request, res: Response) => {
    try{
        const gender = req.query.gender
        const resposta = await retornarGender(gender as string)
    
        res.status(200).send({quanlity: resposta.cont})
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// 4 a)
app.put("/actor", async (req: Request, res: Response) => {
    try {
        
        const {id, salary} = req.body

        const resposta = await atualizarSalario(id,salary)
    
        res.status(200).send({message: `Salario atualizado. ${resposta}`})
        
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const resposta = await deletarAtor(id)

        res.status(200).send({message: `Ator deletado. ${resposta}`})

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})