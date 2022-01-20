// a)
type Post = {
    autor: string,
    texto: string
}

const posts: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }, {
        autor: "Soraia",
        texto: "khhhhhhhhhhhhh"
    }


]
// console.log(posts)

// b) as entradas é posts como um array de obejtos, e autor que é uma string. A saída é o autor como string. 

function buscarPostsPorAutor(posts: { autor: string }[], autorInformado: string):object[] {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}
console.log(buscarPostsPorAutor([{autor:"Daniel"}], "Daniel"))
