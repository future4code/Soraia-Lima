import React from "react"
import useForm from "../../hooks/useForm"
import { FormLogin } from "./styled"
import { login } from "../../requests/requests"
import { useHistory } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { goToRegister } from "../../router/coordinatis"

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
                    <button >Entrar</button>
                    <button onClick={() => { goToRegister(history) }}>Cadastrar</button>
                </div>
            </form>
        </FormLogin>
    )
}
export default LoginPage