import axios from 'axios'
import {BASE_URL} from '../constants/url'

//PEGAR JOGOS DISPONÍVEIS
export const getLotteries = (setState) =>{
    const url = `${BASE_URL}/loterias`
    const request = axios.get(url)

    request.then((res) =>{
        setState(res.data)
    })
    .catch((error) =>{
        alert(error.response)
    })
}

// PEGAR CONCURSOS 
export const getContests = (setState) =>{
    const url = `${BASE_URL}/loterias-concursos`
    const request = axios.get(url)

    request.then((res) =>{
        setState(res.data)
    })
    .catch((error) =>{
        alert(error.response)
    })
}

//PEGAR UM CONSURSO ESPECÍFICO
export const getContestById = (id, setState) =>{
    const url = `${BASE_URL}/concursos/${id}`
    const request = axios.get(url)

    request.then((res) =>{
        setState(res.data)
    })
    .catch((error) =>{
        alert(error.response)
    })
}