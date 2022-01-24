import express from "express"
import { AddressInfo } from "net"
import { send } from "process"

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
app.get("/", (req, res) => {
    res.status(200).send("Minha primeira requisição, ahhhhhhhhhhhhh!")
})

// exercício 2
type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string

}

// exercício 3

const users: User[] = [
    {
        id: 1,
        name: "Soraia",
        phone: "(61) 3333-3333",
        email: "soraia@gmail.com",
        website: "www.soraia.com.br"
    },
    {
        id: 2,
        name: "Rodrigo",
        phone: "(84) 3030-3030",
        email: "rodrigo@gmail.com",
        website: "www.rodrigo.com.br"
    },
    {
        id: 3,
        name: "Nika",
        phone: "(44) 3131-3131",
        email: "nika@gmail.com",
        website: "www.nika.com.br"
    },
    {
        id: 4,
        name: "Douglas",
        phone: "(61) 99999-9999",
        email: "douglas@gmail.com",
        website: "www.douglas.com.br"
    }

]

// exercício 4
app.get("/users", (rer, res) => {
    res.status(200).send(users)
})

// exercício 5

type Post = {
    id: number
    title: string,
    body: string,
    userId: number
}

//exercício 6 - Eu fiz fora do user, por que pra mim, ficou melhor de ver as informações. 

const posts: Post[] = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 2,
        id: 3,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        userId: 2,
        id: 4,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        userId: 3,
        id: 5,
        title: "asperiores ea ipsam voluptatibus modi minima quia sint",
        body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
        userId: 3,
        id: 6,
        title: "dolor sint quo a velit explicabo quia nam",
        body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
        userId: 4,
        id: 7,
        title: "ullam ut quidem id aut vel consequuntur",
        body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
    },
    {
        userId: 4,
        id: 8,
        title: "doloremque illum aliquid sunt",
        body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
    }
]

// exercício 7 
app.get("/posts", (req, res) => {
    res.status(200).send(posts)
})

// exercicio 8
app.get("/post", (req, res) => {
    const id = Number(req.query.id)
    console.log(id)
    if (!id) res.status(400).send("ID inválido")

    const retornarPosts = posts.filter((post: any) => {
        if (post.userId === id) {
            return post
        }
    })

    res.status(200).send(retornarPosts)
})