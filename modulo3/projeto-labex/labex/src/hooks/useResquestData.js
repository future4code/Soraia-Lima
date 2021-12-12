import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL, ALUNO } from '../components/info'

export const useResquestData = () => {

    const [viagens, setViagens] = useState([])

    const getTrips = () => {
        axios.get(`${BASE_URL}${ALUNO}/trips`).then((res) => {
            setViagens(res.data.trips)
        }).catch((error) => {
            alert("Ah que pena, aconteceu um erro, por gentileza, tente mais tarde", error.response)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

    return viagens
}
