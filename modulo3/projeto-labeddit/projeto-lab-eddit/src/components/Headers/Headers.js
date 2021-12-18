import { useHistory } from "react-router-dom"
import logo from "../../image/logo.png"
import { goToLogin } from "../../router/coordinatis"
import { Header } from "./styled"

function Headers() {
    const history = useHistory()

    const logout = () => {
        localStorage.clear()
        goToLogin(history)
    }

    return (
        <Header>
            <img src={logo} />
            <button onClick={logout}>Logout</button>
        </Header>
    )
}

export default Headers