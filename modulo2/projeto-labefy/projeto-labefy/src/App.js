import React from "react";
import PagCadastro from './components/PagCadastro'
import PagLista from './components/PagLista'
import Home from "./components/home";
import styled from "styled-components";
import Logo from "./imagens/logo.jpg"


const Cebecalho = styled.div `
display: flex;
width: 100%;
height: 8vh;
align-items: center;

img{
  width:6vw;
  height:5vh;
}
p{
  margin-right:18vw;
  margin-left: -10px;
}
button{
  margin-left:10px;
  border: none;
  width:200px;
  height:5vh;
  background-color: #CD4B87; 
  cursor: pointer;
  border-radius: 50px;
}
`
const Container = styled.div`
width:100%;
height:100vh;

`
const Rodape = styled.div`
position: absolute;
bottom: 0;
background-color: pink;
width:100vw;
height:10vh;
text-align: center;


`

class App extends React.Component {

  state = {
    pagina: "home"
  }

  mudarDePagina = () => {
    switch (this.state.pagina) {
      case "home":
        return <Home
        irParaHome={this.irParaHome}/>
      case "cadastro":
        return <PagCadastro 
        irParaLista={this.irParaLista} />
      case "lista":
        return <PagLista
        irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }
  
  irParaCadastro =() =>{
    this.setState({pagina: "cadastro"})
  }
  irParaLista =() =>{
    this.setState({pagina: "lista"})
  }
  irParaHome =() =>{
    this.setState({pagina: "home"})
  }

  render() {
    return (
      <Container> 
          <Cebecalho>
            <img src={Logo}/> <p>Labefy</p>
            <button onClick={this.irParaHome}>Home</button>
            <button onClick={this.irParaLista}>Lista de musicas</button>
            <button onClick={this.irParaCadastro}>Cadastro</button>
          </Cebecalho>
          <Rodape>
            <p>Telefone: (61) 3333-3333</p>
            <p>E-mail: labefy@gmail.com</p>
            
          </Rodape>
    
        {this.mudarDePagina()}

      </Container>
    );
  }
}

export default App;
