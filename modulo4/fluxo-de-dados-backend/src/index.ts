import express, { Request, Response } from "express"
import { AddressInfo } from "net"
import { produtos } from "./data"

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

// exercício 1
app.get("/teste", (req: Request, res: Response) => {
    res.status(200).send("A API está funcionado")
})

const arrayProducts = produtos

// exercício 4 // desafio 10
app.get("/produtos", (req: Request, res: Response) => {
    const nameProduct = req.query.name
    if (!nameProduct) {
        res.status(200).send(arrayProducts)
    } else {
        const returnProduct = arrayProducts.filter((item) => {
            if (item.name === nameProduct) {
                return item
            }
        })
        res.status(200).send(returnProduct)
    }
})

// exercício 3 & exercício 7
app.post("/produtos", (req: Request, res: Response) => {
    try {
        const user = req.headers.authorization
        const { name, price } = req.body

        if (!user) {
            throw new Error("Header de authorization não informado")
        } else if (!name || (!price && price !== 0)) { // a segunda comparação é para que preço não seja 0.
            throw new Error("Campos necessárias para a criação de um novo produto não foram informadao, por gentileza, informar name e price.")
        } else if (typeof name !== "string") {
            throw new Error("O campo name, deve ser informado como string")
        } else if (typeof price !== "number") {
            throw new Error("O campo price, deve ser informado como number")
        } else if (typeof price !== "number") {
            throw new Error("O campo price, deve ser informado como number")
        } else if (price <= 0) {
            throw new Error("O preço deve ser maior que 0")
        }

        arrayProducts.push({
            id: Date.now().toString(),
            name,
            price
        })
        res.status(201).send(arrayProducts)

    } catch (error: any) {
        switch (error.message) {
            case "Header de authorization não informado":
                res.status(401)
                break
            case "Campos necessárias para a criação de um novo produto não foram informadao, por gentileza, informar name e price":
                res.status(422)
                break
            case "O campo name, deve ser informado como string":
                res.status(422)
                break
            case "O campo price, deve ser informado como number":
                res.status(422)
                break
            case "O preço deve ser maior que 0":
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// exercício 5 e exercício 8
app.put("/produtos/:produtoId", (req: Request, res: Response) => {
    try {

        const user = req.headers.authorization
        const id = req.params.produtoId
        const newPrice = Number(req.body.price)
        let isProductFound = false // usado para saber se o produto será encontrado, começa com false, pois ainda não temos um  produto

        if (!user) {
            throw new Error("header de authorization não informado")
        }
        else if (!newPrice && newPrice !== 0) {
            throw new Error("O campo price não foi informado")
        }
        else if (typeof newPrice !== "number") {
            throw new Error("O campo price, deve ser informado como number")
        }
        else if (newPrice <= 0) {
            throw new Error("O preço deve ser maior que 0")
        }

        for (let i = 0; i < arrayProducts.length; i++) {
            if (arrayProducts[i].id === id) {
                arrayProducts[i].price = newPrice
                isProductFound = true // como o produto foi encontrado ele passa a ser true.
            }
        }

        if (!isProductFound) { // se não existir produto, se for false, entra nessa condição. 
            throw new Error("produto não encontrado")
        }

        res.status(200).send({ arrayProducts })

    } catch (error: any) {
        switch (error.message) {
            case "header de authorization não informado":
                res.status(401)
                break
            case "O campo price não foi informado":
                res.status(422)
                break
            case "O campo price, deve ser informado como number":
                res.status(422)
                break
            case "O preço deve ser maior que 0":
                res.status(422)
                break
            case "produto não encontrado":
                res.status(404)
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// exercício 6 e exercício 9
app.delete("/produtos/:produtoId", (req: Request, res: Response) => {
    try {
        const user = req.headers.authorization
        const id = req.params.produtoId
        let isProductFound = false

        if (!user) {
            throw new Error("header de authorization não informado")
        }

        for (let i = 0; i < arrayProducts.length; i++) {
            let index = arrayProducts.findIndex((item) => item.id === id)
            if (index > -1) {
                arrayProducts.splice(index, 1)
                isProductFound = true
            }
        }

        if (!isProductFound) {
            throw new Error("produto não encontrado")
        }

        res.status(200).send(arrayProducts)

    } catch (error: any) {
        switch (error.message) {
            case "header de authorization não informado":
                res.status(401)
                break
            case "produto não encontrado":
                res.status(404)
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})
