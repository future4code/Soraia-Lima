import React from "react";
import styled from "styled-components";
import axios from "axios";

const Cadastro = styled.div`
border: 1px solid black;
margin: 0 auto; 
display: flex;
align-items: center;
flex-direction: column;
width: 400px;
padding: 10px;
margin-top: 30px;
`
const Inputs = styled.input`
margin-bottom: 10px;`


class DadosUsuario extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    //-------------------------------------------------------
    renderizaNome = (event) => {
        this.setState({ nome: event.target.value })

    }
    renderizaEmail = (event) => {
        this.setState({ email: event.target.value })

    }

    //--------------------CRIAR UM NOVO USUARIO---------
    createUser = () => {
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "soraia-aparecida-carver"
            }
        }).then(() => {
            alert("sucesso")
            this.setState({ nome: "" })
            this.setState({ email: "" })
        }).catch((erro) => {
            console.log(erro.data)
            alert("Não foi possível realizar o cadastro. Por favor, verifique todos os campos e tente novamente")
        })
    }
    render() {

        return (
            <div>
                <Cadastro>
                    <h3>Cadastro:</h3>
                    <Inputs
                        placeholder={"Nome"}
                        value={this.state.nome}
                        onChange={this.renderizaNome} />
                    <Inputs
                        placeholder={"email"}
                        value={this.state.email}
                        onChange={this.renderizaEmail} />
                    <button onClick={this.createUser}>Cadastrar</button>
                </Cadastro>

            </div >
        )
    }
}

export default DadosUsuario