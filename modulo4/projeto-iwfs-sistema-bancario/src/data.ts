export type Transaction = {
    value: number | string,
    date: string,
    description: string
}

export type User = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance?: number | string
    extract?: Transaction[]
}

export const Users: User[] = [
    {
        id: 1,
        name: "Soraia",
        cpf: "10100100102",
        birthDate: "17/02/1997",
        balance: 50.00,
        extract: [{
            value: 200.00,
            date: "01/01/2022",
            description: "Pagar luz"
        }]

    },
    {
        id: 2,
        name: "Douglas",
        cpf: "10100100103",
        birthDate: "26/04/1991",
        balance: 250.10,
        extract: []
    }
]
