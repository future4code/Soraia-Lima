import { useHistory } from "react-router-dom"
import logo from "../../image/logo.png"
import { goToLogin } from "../../router/coordinatis"
import { Header } from "./styled"

function Headers (){
    const history = useHistory()
    const token = localStorage.getItem("token")
    const logout = ()=>{
        localStorage.clear()
        goToLogin(history)
    }
    return(
        <Header>
            <div>
            <img src={logo}/>
            <input
            placeholder="Buscar no amigos"/>
            </div>
            {/* {token && <button onClick={() => { goToRegister(history) }}>Cadastrar</button>} */}
            {token && <button onClick={logout}>Logout</button>}
        </Header>
    )
}

export default Headers