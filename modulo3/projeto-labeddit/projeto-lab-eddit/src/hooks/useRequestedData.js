import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../components/url"

export const useRequestedData = () => {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setPosts(res.data)
        }).catch((error) => {
            alert("Desculpe, tivemos um imprevisto, por gentileza, tente mais tarde...", error.response)
        })
    }

    useEffect(() => {
        getPosts()
    }, [posts])

    return posts
}
