import axios from 'axios'
import {BASE_URL} from '../constants/url'

export const getMoveis = () => {
    const url = BASE_URL + '/popular?api_key=<<api_key>>&language=en-US&page=1'
    const request = axios.get(url)

    request.then((res) => {
    }).catch((err) => {
        alert(err.response.data)
    })
}

export const getDetailMovei = (id) => {
    const url = BASE_URL + `/${id}?api_key=<<api_key>>&language=en-US`
    const request = axios.get(url)

    request.then((res) => {
    }).catch((err) => {
        alert(err.response.data)
    })
}