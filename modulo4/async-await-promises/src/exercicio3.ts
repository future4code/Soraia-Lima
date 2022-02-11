// a- Acho que não.
// b - Acredito que sim. Pois assim, evitamos problemas futuros, garantindo que o resultado vai ser de acordo com as propriedades que passamos no map. Caso não fizermos isso, ele pode retornar qualquer coisa. 

// c - 
import axios from "axios"
import { baseUrl } from "./baseUrl"

type User = {
	id: string;
	name: string;
	email: string;
}

const buscarInscritos = async (): Promise<User[]> => {
  const result = await axios.get(`${baseUrl}/subscribers`)
  return result.data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email
    }
  })
}

const main = async (): Promise<void> => {
    try {
      console.log(await buscarInscritos())
  
    } catch (err: any) {
      console.log(err.response?.data || err.message)
    }
  }
  
  console.log(main())

