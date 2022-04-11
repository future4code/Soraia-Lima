import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToAdminHome, goToLogin } from "../router/coodinator"

export const useUnprotectedPage = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            goToAdminHome(navigate)
        } else {
            goToLogin(navigate)
        }
    }, [])
}
