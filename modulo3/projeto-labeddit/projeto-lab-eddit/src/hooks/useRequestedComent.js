import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../components/url"

export const useRequestedComent = (id) => {

    const [comment, setComment] = useState([])

    const getPostComments = () => {

        axios.get(`${BASE_URL}/posts/${id}/comments`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setComment(res.data)

        }).catch((error) => {
            alert("Tivemos um imprevisto, por gentileza tente mais tarde...", error.response)
        })
    }

    useEffect(() => {
        getPostComments()
    }, [comment])

    return comment
}