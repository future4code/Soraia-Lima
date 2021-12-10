import { Container, Login } from '../styles'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import useForm from '../hooks/useForm';

function LoginPage() {

    const {form, onChange, cleanFields} = useForm({
        email: "",
        password: ""
    })

    const history = useHistory()

    // VOLTAR AO HOME
    const backToStart = () => {
        history.push("/")
    }

    //------------------------ LOGAR ----------------------------------
    const login = (event) => {
        event.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/soraia/login', form).then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/admin-trips-list")
        }).catch((erro) => {
            alert("Por gentileza, verifique todos os campos e tente novamente", erro.response)
        })
        cleanFields()
    }

    return (
        <Container>
            <Login>
                <h1>Login</h1>
                <form onSubmit={login}>
                    <input
                        placeholder={'E-mail'}
                        type="email"
                        value={form.email}
                        name={"email"}
                        onChange={onChange}
                        required />
                    <input
                        placeholder={'Senha'}
                        type="password"
                        value={form.password}
                        onChange={onChange}
                        required
                        name={"password"} />
                    <button>Entrar</button>
                    <button onClick={backToStart}>Voltar</button>
                </form>                
            </Login>
        </Container>
    )
}

export default LoginPage;