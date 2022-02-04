export type Transaction = {
    value: number,
    date: string,
    description: string
}

export type User = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance?: number,
    extract?: Transaction[]
}

export const users1: User[] = [
    {
        id: 1,
        name: "Soraia Silva",
        cpf: "101.001.001-02",
        birthDate: "17/02/1997",
        balance: 900.00,
        extract: [
            {
                value: 200.00,
                date: "01/01/2022",
                description: "Pagamento da conta luz"
            }
        ]
    },
    {
        id: 2,
        name: "Douglas Nunes",
        cpf: "101.001.001-03",
        birthDate: "26/04/1991",
        balance: 1000.10,
        extract: []
    },
    {
        id: 3,
        name: "Rodrigo Almeida",
        cpf: "102.001.001-04",
        birthDate: "08/10/1989",
        balance: 699.99,
        extract: [
            {
                value: 50.00,
                date: "25/01/2022",
                description: "Pagamento da conta água"
            }
        ]
    }
]
