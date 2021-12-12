import axios from "axios"
import { useState,  useEffect} from "react"
import { BASE_URL, ALUNO } from '../components/info';

export const useResquestData = (deletar) => {

    const [viagens, setViagens] = useState([])

    // ------------------------------ VER TODAS VIAGENS --------------------
    const getTrips = () => {
        axios.get(`${BASE_URL}${ALUNO}/trips`).then((res) => {
            setViagens(res.data.trips)
        }).catch((error) => {
            alert("Ah que pena, aconteceu um erro, por gentileza, tente mais tarde", error.response)
        })
    }
    useEffect(() => {
        getTrips()
    }, [deletar])

    return viagens

}
