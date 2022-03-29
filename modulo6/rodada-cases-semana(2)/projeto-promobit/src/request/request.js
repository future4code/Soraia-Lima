import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {API_KEY} from '../constants/api_key'

export const getMoveis = (page, setState) => {
    const url = BASE_URL + `/popular?${API_KEY}&language=pt-BR&page=${page}`
    const request = axios.get(url)

    request.then((res) => {
       setState(res.data)
    }).catch((err) => {
        alert(err.response.data)
    })
}

export const getDetaillMovei = (id) => {
    const url = BASE_URL + `/${id}?${API_KEY}&language=pt-BR`
    const request = axios.get(url)

    request.then((res) => {
    }).catch((err) => {
        alert(err.response.data)
    })
}