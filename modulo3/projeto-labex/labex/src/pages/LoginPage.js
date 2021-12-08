import{Container, Login} from '../styles'
import { useHistory } from "react-router-dom";
import {useState} from "react"
import axios from 'axios';

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
//------------------------ LOGAR ----------------------------------
const loguin =() =>{
    console.log(email, senha);
    const bady ={
        email: email,
        password: senha
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/soraia-aparecida-carver/login', bady).then((res)=>{
        console.log("Deu certo", res.data.token)
        localStorage.setItem("token", res.data.token)
        history.push("/admin-trips-list")

    }).catch((erro)=>{
        alert("Por gentileza, verifique todos os campos e tente novamente", erro.response)
    })
}

    return (
        <Container>
        <Login>
            <h1>Loguin</h1>
            <input 
            placeholder={'E-mail'}
            type="email"
            value={email}
            onChange={inputEmail}/>
            <input
            placeholder={'Senha'}
            type="password"
            value={senha}
            onChange={inputSenha}/>
            <div>
            <button onClick={paginaVoltarHome}>Voltar</button>
            <button onClick={loguin}>Entrar</button>
            </div>
        </Login>
        </Container>
    )
}

export default LoginPage;