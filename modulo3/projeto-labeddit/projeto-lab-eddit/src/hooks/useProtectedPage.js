import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../router/coordinatis"

function useProtectedPage() {

    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            alert("Para ter acesso a página de Posts ou Feed é necessário efetuar login")
            goToLogin(history)
        }
    }, [history])
}
export default useProtectedPage