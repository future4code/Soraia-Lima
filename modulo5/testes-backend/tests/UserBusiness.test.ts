import { UserBusiness } from "../src/business/UserBusiness";
import { CustomError } from "../src/errors/CustomError";
import { UserDataBaseMock } from "./mocks/userDataBaseMock";

const userBusinessMock = new UserBusiness(
    //     new IdGeneratorMock(),
    //     new HashGeneratorMock(),
    //     new TokenGeneratorMock(),
    new UserDataBaseMock()
)

describe("exercicio 2", () => {

    test("exercicio 2.a", async () => {
        expect.assertions(2)

        try {

            await userBusinessMock.getUserByIdBusiness("aaa")


        } catch (error) {
            if (error instanceof CustomError) {
                console.log(error.message)
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Usuário não encontrado")
            }
        }

    })


    test("exercicio 2.b, caso de sucesso", async () => {
        expect.assertions(2)
        const getUserById = jest.fn(
            (id: string) => userBusinessMock.getUserByIdBusiness(id)
          )

        try {

            const result = await getUserById("id_mockado")

            expect(getUserById).toHaveBeenCalledWith("id_mockado")
            expect(result).toEqual({
                id: "id_mockado",
                name: "astrodev",
                email: "astrodev@gmail.com",
                passwor: 'astrodev123',
                role: "ADMIN",
            })


        } catch (error) {
            if (error instanceof CustomError) {
                console.log(error.message)
            }
        }

    })
})