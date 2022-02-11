import axios from "axios"
import { baseUrl } from "./baseUrl"

// a - PUT
// b - 

type novaNoticia = {
    title: string,
    content: string,
    date: number
}

const noticia: novaNoticia = {
    title: "Exercício 4",
    content: "Estou tentando aprender o conteúdo de hoje",
    date: Date.now()
}

const criarNoticia = (noticia: novaNoticia): Promise<any> => {
    return axios.put(`${baseUrl}/news`, noticia)
}

const main = async (): Promise<void> => {
    try {
     await criarNoticia(noticia)
  
    } catch (err: any) {
      console.log(err.response?.data || err.message)
    }
  }
  
console.log(main())