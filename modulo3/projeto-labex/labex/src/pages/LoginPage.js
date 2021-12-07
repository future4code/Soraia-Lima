import{Container, Login} from '../styles'
import { useHistory } from "react-router-dom";
import {useState} from "react"

function LoginPage () {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const history = useHistory()

    const paginaVoltarHome = () => {
        history.goBack()
    }
// ------------------------- FUNCÃO DOS INPUTS -------------------
const inputEmail = (e) => {
    setEmail(e.target.value)
}
const inputSenha = (e) => {
    setSenha(e.target.value)
}

    return (
        <Container>
        <Login>
            <h1>Loguin</h1>
            <input 
            placeholder={'E-mail'}
            value={email}
            onChange={inputEmail}/>
            <input
            placeholder={'Senha'}
            value={senha}
            onChange={inputSenha}/>
            <div>
            <button onClick={paginaVoltarHome}>Voltar</button>
            <button>Entrar</button>
            </div>
        </Login>
        </Container>
    )
}

export default LoginPage;