import React from "react"
import useForm from "../../hooks/useForm"
import { FormLogin, BotaoCadastrar } from "./styled"
import { login } from "../../requests/requests"
import { useHistory } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { goToRegister } from "../../router/coordinatis"
import Headers2 from "../../components/Headers2/Headers2"

function LoginPage() {
    useUnprotectedPage()

    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    const history = useHistory()

    const onSubmintForm = (event) => {
        event.preventDefault()
        login(form, cleanFields, history)
    }

    return (
        <div>
            <Headers2 />
            <FormLogin>
                <h1>Login</h1>
                <form onSubmit={onSubmintForm}>
                    <input
                        placeholder="E-mail"
                        value={form.email}
                        onChange={onChange}
                        required
                        name={"email"}
                        type="email"
                    />
                    <input
                        placeholder="Senha"
                        value={form.password}
                        onChange={onChange}
                        required
                        name={"password"}
                        type="password"
                    />
                    <div>
                        <button
                            type={"submit"}>Entrar</button>
                    </div>
                    <BotaoCadastrar onClick={() => { goToRegister(history) }}>Não possui conta? Cadastre-se</BotaoCadastrar>
                </form>
            </FormLogin>
        </div>
    )
}
export default LoginPage