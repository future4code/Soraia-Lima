import { Character, validateCharacter } from "../src"

describe("Teste para o exercício 2", () => {

    // test("exercício 2.a", () => {

    //     const user: Character = {
    //         nome: "",
    //         defesa: 10,
    //         forca: 10,
    //         vida: 10
    //     }

    //     const result = validateCharacter(user)

    //     expect(result).toBe(false)
    // })

    // test("exercício 2.b", () => {

    //     const user: Character = {
    //         nome: "Soraia",
    //         defesa: 10,
    //         forca: 10,
    //         vida: 0
    //     }

    //     const result = validateCharacter(user)

    //     expect(result).toBe(false)
    // })

    // test("exercício 2.c", () => {

    //     const user: Character = {
    //         nome: "Soraia",
    //         defesa: 10,
    //         forca: 0,
    //         vida: 10
    //     }

    //     const result = validateCharacter(user)

    //     expect(result).toBe(false)
    // })

    // test("exercício 2.d", () => {

    //     const user: Character = {
    //         nome: "Soraia",
    //         defesa: 0,
    //         forca: 10,
    //         vida: 10
    //     }

    //     const result = validateCharacter(user)

    //     expect(result).toBe(false)
    // })


    // test("exercício 2.e", () => {

    //     const user: Character = {
    //         nome: "Soraia",
    //         defesa: 0,
    //         forca: 0,
    //         vida: 0
    //     }

    //     const result = validateCharacter(user)

    //     expect(result).toBe(false)
    // })

    test("exercício 2.f", () => {

        const user: Character = {
            nome: "Soraia",
            defesa: 70,
            forca: 60,
            vida: 50
        }

        const result = validateCharacter(user)

        expect(result).toBe(true)
    })
})
