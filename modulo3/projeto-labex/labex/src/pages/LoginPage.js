import { Container, Login } from '../styles'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import useForm from '../hooks/useForm';
import { BASE_URL, ALUNO } from '../components/info';

function LoginPage() {

    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    const backToStart = () => {
        history.push("/")
    }

    //------------------------ LOGAR -------------------------------
    const login = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}${ALUNO}/login`, form).then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/admin-trips-list")
            alert("Seja bem-vindo Adminstrador 👨‍🚀")
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
                        required
                    />
                    <input
                        placeholder={'Senha'}
                        type="password"
                        value={form.password}
                        onChange={onChange}
                        required
                        name={"password"}
                    />
                    <div>
                        <button>Entrar</button>
                        <button onClick={backToStart}>Voltar</button>
                    </div>
                </form>
            </Login>
        </Container>
    )
}

export default LoginPage;