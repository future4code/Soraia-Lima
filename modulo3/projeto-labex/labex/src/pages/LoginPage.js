import{Container, Login} from '../styles'
import { useHistory } from "react-router-dom";

function LoginPage () {

    const history = useHistory()

    const paginaVoltarHome = () => {
        history.goBack()
    }

    return (
        <Container>
        <Login>
            <h1>Loguin</h1>
            <input 
            placeholder={'E-mail'}
            value={''}
            onChange={''}/>
            <input
            placeholder={'Senha'}
            value={''}
            onChange={''}/>
            <div>
            <button onClick={paginaVoltarHome}>Voltar</button>
            <button>Entrar</button>
            </div>
        </Login>
        </Container>
    )
}

export default LoginPage;