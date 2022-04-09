import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { API_KEY } from '../constants/api_key'

export const getMovies = (page, setState) => {
    const url = `${BASE_URL}/popular?${API_KEY}&language=pt-BR&page=${page}`
    const request = axios.get(url)

    request.then((res) => {
        setState(res.data)
    }).catch((err) => {
        alert(err.response)
    })
}

export const getDetaillMovie = (id, setDetalhes) => {
    const url = `${BASE_URL}/${id}?${API_KEY}&language=pt-BR`
    const request = axios.get(url)

    request.then((res) => {
        setDetalhes(res.data)
    }).catch((err) => {
        alert(err.response)
    })
}

export const getCreditsMovie = (id, setState) => {
    const url = `${BASE_URL}/${id}/credits?${API_KEY}&language=pt-BR`
    const request = axios.get(url)
    
    request.then((res) => {
            setState(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMovieTrailer = (id, setState) =>{
    const url = `${BASE_URL}/${id}/videos?${API_KEY}&language=pt-BR`
    const request = axios.get(url)
    
    request.then((res) => {
            setState(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMovieRecommendations = (id, setState) =>{
    const url = `${BASE_URL}/${id}/recommendations?${API_KEY}&language=pt-BR&page=1`
    const request = axios.get(url)
    
    request.then((res) => {
            setState(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMoviesGenres = () =>{
    const url = `https://api.themoviedb.org/3/genre/movie/list?${API_KEY}&language=pt-BR`
}