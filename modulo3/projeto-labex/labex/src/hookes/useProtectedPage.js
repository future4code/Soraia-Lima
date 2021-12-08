import { useEffect} from "react"
import { useHistory } from "react-router-dom"

function useProtectedPage () {
    const history = useHistory()

    const token = localStorage.getItem("token")

    useEffect(()=>{
        const loginAreaAdmin = () => {
            if (token === null) {
                console.log("Não está logado")
                history.push("/login")
            } else {
                history.push("/admin-trips-list")
            }
        }
    }, [])
    return(
        <div>
            useProtectedPage
        </div>
    )
}
export default useProtectedPage
