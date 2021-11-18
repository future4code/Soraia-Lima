import React from "react";
import PagCadastro from './components/PagCadastro'
import PagLista from './components/PagLista'
import Home from "./components/home";

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
      <div>
          <div>
            <button onClick={this.irParaHome}>Home</button>
            <button onClick={this.irParaLista}>Lista de musicas</button>
            <button onClick={this.irParaCadastro}>Cadastro</button>
          </div>
    
        
        {this.mudarDePagina()}

      </div>
    );
  }
}

export default App;
