// a - É uma maneira de executarmos nossas requisições de uma só vez pois normalmente quando executamos uma função assincrona, ela espera uma requisição ser respondida para depois enviar outra. 
// b - Porque será enviado a notificação para todos de uma só vez.
// c - 

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

    try {
        const result = ids.map((id) => {
            return axios.post(`${baseUrl}/notifications`, {
                subscriberId: id,
                message: "Finalmente acabei o exercício, Gloria a Deus por isso!!!!!"
            })
        })

        await Promise.all(result)

        console.log(`Mensagem enviada.`)
        
    } catch (error) {
        console.log("Não consegui enviar a mensagem para o destinatário :(")
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

main()

