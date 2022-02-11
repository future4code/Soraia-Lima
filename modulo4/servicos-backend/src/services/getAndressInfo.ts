import { Andress } from "../types/Andress"
import axios from "axios"

const baseUrl = "https://viacep.com.br/ws"

export const getAndressInfo = async (cep: string, email: string, complemento:string): Promise<Andress | null> => {
    try {
        const result = await axios.get(`${baseUrl}/${cep}/json`)

        const endereco: Andress = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            complemento: complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf,
            numero: "S/N",
            email: email
        }

        return endereco

    } catch (error: any) {
        return error.message || null
    }
}