// a - Pra mim é só uma maneira de escrever a mesma coisa de formas diferente. 

import axios from "axios"
import { baseUrl } from "./baseUrl"

// b- 
const buscarInscritos = async (): Promise<any[]> => {
    const result = await axios.get(`${baseUrl}/subscribers`)
    return result.data
}
