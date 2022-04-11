import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/url"

export const useRequestedClass = (id) => {

    const [classe, setClasse] = useState([])

    const getClasseByModule = () => {
        const url = BASE_URL + `classe/${id}`
        const request = axios.get(url)

        request.then((res) => {
            setClasse(res.data.classes)

        }).catch((error) => {
            alert("Desculpe, tivemos um imprevisto, por gentileza, tente mais tarde...", error.response)
        })
    }

    useEffect(() => {
        getClasseByModule()
    }, [])

    return classe
}