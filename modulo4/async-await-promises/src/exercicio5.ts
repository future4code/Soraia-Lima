import axios from "axios"
import { baseUrl } from "./baseUrl"

type Usuario = {
    id: string,
    email: string,
    name: string
}

const pegarUsuario = async (): Promise<Usuario[]> => {
    const resp = await axios.get(`${baseUrl}/subscribers`)
    return resp.data
}

const retornarId = (usuario: Usuario[]) => {
    return usuario.map((usuario) => {
        return usuario.id
    })
}

const enviarNotificacao = async (ids: string[]): Promise<any> => {

    for (let id of ids) {

        try {
           await axios.post(`${baseUrl}/notifications`, {
                subscriberId: id,
                message: "Última semana do módulo 4 do backend, o bicho ta pegando ahhhhhhhhh"
            })

            console.log(`Mensagem enviada para ${id}`)

        } catch (error) {
            console.log("Não consegui enviar a mensagem para o destinatário :(")
        }
    }
}

const main = async (): Promise<void> => {
    try {
        const user = await pegarUsuario()
        const ids = retornarId(user)
        await enviarNotificacao(ids)

    } catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}

console.log(main())