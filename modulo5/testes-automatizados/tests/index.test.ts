import { performPurchase } from '../src/index'

describe("Teste - exercício 2", () => {

    // test("execicio 2.a", () => {
    //     const user: User = {
    //         name: "Soraia",
    //         balance: 200
    //     }

    //     const result = performPurchase(user, 70)
        
    //     expect(result?.balance).toEqual(130)

    // })

    // test("exercicio2.b", () =>{
    //     const user: User ={
    //         name: 'Rodrigo',
    //         balance: 100
    //     }

    //     const result = performPurchase(user, 100)

    //     expect(result?.balance).toEqual(0)
    // })

    test("exercicio2.c", () =>{
        const user: User ={
            name: 'Rodrigo',
            balance: 100
        }

        const result = performPurchase(user, 140)

        expect(result?.balance).toEqual(undefined)
    })

})

