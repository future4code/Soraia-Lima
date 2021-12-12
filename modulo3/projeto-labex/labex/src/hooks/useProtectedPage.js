import { useEffect} from "react"
import { useHistory } from "react-router-dom"

function useProtectedPage () {
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")

            if (token === null) {
                alert("Para ter acesso a página de Administrador é necessário efetuar login")
                history.push("/login")
            }        
    }, [history])
}
export default useProtectedPage
