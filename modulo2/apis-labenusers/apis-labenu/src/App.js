import React from "react";
import DadosUsuario from "./components/DadosUsuario";
import ListaUsuarios from "./components/ListaUsuarios";
import axios from "axios";
import styled from "styled-components";

const Cadastro = styled.div `
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

const ListaDeUsuarios = styled.div`
align-items: center;
margin: 0 auto;
display: flex;
flex-direction: column;
`

class App extends React.Component {

  state = {
    listaDeUsuarios: [],
    nome: "",
    email: "",
    pagina: "true"
  }
  componentDidMount() {
    this.getAllUsers()
  }
  // -----------------------------------------------------------
  // escolherPaginaLista = () =>{
  //   this.setState({pagina: "Lista"})
  // }
  // escolherPaginaDadosUsuarios = () =>{
  //   this.setState({pagina: "Dados"})
  // }
  // alteraPagina =() =>{
  //   if (this.state.pagina === "Dados") {
  //     this.setState({ pagina: "Lista" })
  //   } else {
  //     this.setState({ pagina: "Lista" })
  //   }
  // }

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
      this.getAllUsers()
      this.setState({ nome: "" })
      this.setState({ email: "" })
    }).catch((erro) => {
      console.log(erro.data)
      alert("Não foi possível realizar o cadastro. Por favor, verifique todos os campos e tente novamente")
    })
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

  mudarPagina =() =>{
    this.setState({pagina: !this.state.pagina})
  }
  render() {
    
    const pagina = this.state.pagina? <DadosUsuario/> : <ListaUsuarios/>
    const lista = this.state.listaDeUsuarios.map((item) => <li key={item.id}>{item.name} <button value={item.id} onClick={this.deleteUser}>Deletar</button> </li>)
    
    return (
      <div>
        <button onClick ={this.mudarPagina}>{this.state.pagina? 'Ir para lista de usuários': 'Voltar para cadastro'}</button>
        {pagina}

        

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
        <ListaDeUsuarios>
      <h3>Lista de usuários cadastrados:</h3>
        <ul>
          {lista}
        </ul>
        </ListaDeUsuarios>
        
      </div>
    );
  }

}

export default App;
