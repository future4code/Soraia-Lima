import React from "react"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { FormRegister } from "./styled"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router-dom"
import { signup } from "../../requests/requests"

function RegisterPage (){
    useUnprotectedPage()

    const {form, onChange, cleanFields} = useForm({
    username:"",
	email: "",
	password: ""
    })
   
    const history = useHistory()

    const onSubmintForm = (event) =>{
        event.preventDefault()
        signup(form, cleanFields, history)
    }
    return(
        <div>
             <FormRegister>
            <h1>Cadastro</h1>
            <form onSubmit={onSubmintForm}>
                <input
                    placeholder="Nome"
                    value={form.username}
                    onChange={onChange}
                    required
                    name={"username"}
                    pattern={"^.{3,}"}
                    title={"O nome deve possuir no mínimo 3 caracteres"}
                />
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
                    pattern={"^.{8,}"}
                    title={"A senha deve possuir no mínimo 8 e no máximo 30 caracteres"}
                />
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </FormRegister>
        </div>
    )
}
export default RegisterPage