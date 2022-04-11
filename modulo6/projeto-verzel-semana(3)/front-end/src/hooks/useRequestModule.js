import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/url"

export const useRequestedModule = () => {

    const [module, setModule] = useState([])

    const getModule = () => {
        const url = BASE_URL + 'module'

        axios.get(url)
        .then((res) => {
            setModule(res.data.modules)
        }).catch((error) => {
            alert("Desculpe, tivemos um imprevisto, por gentileza, tente mais tarde...", error.response)
        })
    }

    useEffect(() => {
        getModule()
    }, [module])

    return module
}