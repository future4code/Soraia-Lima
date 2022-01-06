import { Header2 } from "./styled"
import logo from "../../image/logo.png"
import { goToLogin } from "../../router/coordinatis"
import { useHistory } from "react-router-dom"

function Headers2() {
    const history = useHistory()

    return (
        <Header2>
            <img onClick={() => { goToLogin(history) }} src={logo} alt="logo" />
        </Header2>
    )
}

export default Headers2
