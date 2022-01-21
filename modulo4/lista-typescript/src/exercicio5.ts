type Colaborador = {
    name: string,
    email: string,
    role: string
}

const listaDeColaboradores = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

function retornarEmail(lista2: Colaborador[]): string[] {
    return lista2.filter((colaborador) => {
        return colaborador.role === "admin"
    }).map((colaborador) => {
        return colaborador.email
    })
}

console.log(retornarEmail(listaDeColaboradores))