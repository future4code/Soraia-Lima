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
});;

// EXERCÍCIO 1
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

// b)
const buscarAtorPorNome = async (nome: string): Promise<any> => {
    const resultado = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${nome}'
    `)
    return resultado[0][0]
}

// c)
const retornarGender = async (gender: string): Promise<any> => {
    const resultado = await connection.raw(`
    SELECT COUNT(*) as cont FROM Actor WHERE gender = "${gender}"
    `);
    const count = resultado[0][0];
    return count;
};

// EXERCÍCIO 2
// a)
const atualizarSalario = async (id: string, salary: number): Promise<void> => {
    await connection.where({ id: id })
        .update({ salary: salary })
        .into("Actor");
}

// b) 
const deletarAtor = async (id: string): Promise<void> => {
    await connection("Actor").where({ id: id }).del()
}

// c)
const retornarGender2 = async (gender: string): Promise<any> => {
    const result = await connection("Actor").avg("salary").where({ gender });
    return result[0]
}


// EXERCÍCIO 3
const retornarGender3 = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

//a
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const resposta = await retornarGender3(id)

        res.status(200).send({ message: resposta })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//b
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const resposta = await retornarGender(gender as string)

        res.status(200).send({ quanlity: resposta.cont })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EXERCÍCIO 4 
// a)
app.put("/actor", async (req: Request, res: Response) => {
    try {

        const { id, salary } = req.body

        const resposta = await atualizarSalario(id, salary)

        res.status(200).send({ message: `Salario atualizado. ${resposta}` })

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

        res.status(200).send({ message: `Ator deletado. ${resposta}` })

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// DESAFIOS 

//5
const criarFilme = async (
    id: string,
    nome: string,
    sinopse: string,
    dataLancamento: string,
    avaliacao: number
): Promise<void> => {
    await connection("Filmes").insert({
        id: id,
        nome: nome,
        sinopse: sinopse,
        data_lancamento: dataLancamento,
        avaliacao: avaliacao
    })
}

app.post("/filmes", async (req: Request, res: Response) => {
    try {
        await criarFilme(
            req.body.id,
            req.body.nome,
            req.body.sinopse,
            req.body.dataLancamento,
            req.body.avaliacao
        );

        res.status(201).send("Filme criado com sucesso")
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error hhhhhhhhhhhhhhhhh")
    }
})

// 6 
const retornarFilmes = async (): Promise<any> => {
    const result = await connection.select("*").from("Filmes").limit(15);
    return result
}

app.get("/filmes", async (req: Request, res: Response) => {
    try {
        const resposta = await retornarFilmes()
        res.status(200).send({ resposta })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error hhhhhhhhhhhhhhhhh")
    }
})

// 7
const retornarFilmes2 = async (palavra: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Filmes WHERE (nome LIKE "%${palavra}%") OR (sinopse LIKE "%${palavra}%") ORDER BY data_lancamento`
    )
    return result[0]
}

app.get("/filmes/buscar", async (req: Request, res: Response) => {
    try {
        const palavra = req.query.palavra
        const resposta = await retornarFilmes2(palavra as string)
        res.status(200).send({ resposta })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error hhhhhhhhhhhhhhhhh")
    }
})