import axios from "axios"
import { useState,  useEffect} from "react"

export const useResquestData = () => {

    const [viagens, setViagens] = useState([])

    // ------------------------------ VER TODAS VIAGENS --------------------
    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Soraia/trips').then((res) => {
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
