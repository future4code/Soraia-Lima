import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../components/url"

export const useResquestData = () => {

    const [postagens, setPostagens] = useState([])

    const getPosts = () => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setPostagens(res.data)
        }).catch((error) => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        getPosts()
    }, [postagens])

    return postagens
}
