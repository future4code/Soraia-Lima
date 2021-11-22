import React from "react";
import axios from "axios";
import styled from "styled-components";

const ListaDeUsuarios = styled.div`
align-items: center;
margin: 0 auto;
display: flex;
flex-direction: column;
`
const Usuario = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
width: 250px;`

class ListaUsuarios extends React.Component {
    state = {
        listaDeUsuarios: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    // ----------------PEGAR A LISTA ----------
    getAllUsers = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "soraia-aparecida-carver"
            }
        }
        ).then((resposta) => {
            this.setState({ listaDeUsuarios: resposta.data })
            console.log(resposta.data)
        }).catch((erro) => {
            console.log(erro.response.data);
        })
    }

    // --------------------- DELETAR USUARIO ----------
    deleteUser = (event) => {
        const id = event.target.value // nesse caso, passo o value no botão!!
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "soraia-aparecida-carver"
            }
        }
        ).then(() => {
            this.getAllUsers()
            alert("Usuario excluido com sucesso!")
        }).catch((erro) => {
            console.log(erro.response.data)
            console.log(erro.response.status)
            alert("Ocorreu algum erro, tente novamente :(")
        })
    }

    render() {
        const lista = this.state.listaDeUsuarios.map((item) => <Usuario key={item.id}>{item.name} <button value={item.id} onClick={this.deleteUser}>Deletar</button> </Usuario>)
        return (
            <div>
                <ListaDeUsuarios>
                    <h3>Lista de usuários cadastrados:</h3>
                    <ul>
                        {lista}
                    </ul>
                </ListaDeUsuarios>
            </div>
        )
    }
}

export default ListaUsuarios;