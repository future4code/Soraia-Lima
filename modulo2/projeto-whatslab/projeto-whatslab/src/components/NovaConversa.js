import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
border: 1px solid black;
width:50vw;
height:100vh;
margin-left:25vw;
display: flex;
flex-direction: column;
justify-content: flex-end;

`
const Inputs = styled.div `
display:flex;
flex-direction:row;
justify-content: space-between;
`
const InputUsuario = styled.input `
width: 10vw;
`
const InputMensagem = styled.input `
width: 80vw;
`

const CampoMensagens = styled.div `
display:flex;
flex-direction:column;
margin-left: 20px;

`

class NovaConversa extends React.Component {
  state = {

    conversa: [{
      id: Date.now(),
      usuario: "",
      mensagem: "",
    }
    ],

    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  adicionaConversa = () => {
    const novoUsuario = {

      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }

    const novosUsuarios = [...this.state.conversa, novoUsuario]

    this.setState({ conversa: novosUsuarios });
    this.setState({
      valorInputUsuario: "",
      valorInputMensagem: ""
    })

  }

  onChancheInputUsuario = (event) => {

    this.setState({ valorInputUsuario: event.target.value })
  }

  onChancheInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  }

  render() {

    const novasConversas = this.state.conversa.map((conversa) => {
      return (
        <p key={conversa.id}>
          <b>{conversa.usuario}</b> {conversa.mensagem}
        </p>
      
      )

    })

    return (
      <Container>
        <CampoMensagens>{novasConversas}</CampoMensagens>
        
        <Inputs>
          <InputUsuario
            value={this.state.valorInputUsuario}
            onChange={this.onChancheInputUsuario}
            placeholder={"Usuário"}
          />
          <InputMensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChancheInputMensagem}
            placeholder={"Mensagem"}
          />
          
          <button onClick={this.adicionaConversa}>Enviar</button>
          
        </Inputs>
        
      </Container>
    );
  }
}

export default NovaConversa;
