import React from "react";
import DadosUsuario from "./components/DadosUsuario";
import ListaUsuarios from "./components/ListaUsuarios";

class App extends React.Component {

  state = {
    pagina: "true"
  }


  mudarPagina =() =>{
    this.setState({pagina: !this.state.pagina})
  }
  render() {
    
    const pagina = this.state.pagina? <DadosUsuario/> : <ListaUsuarios/>
    
    
    return (
      <div>
        <button onClick ={this.mudarPagina}>{this.state.pagina? 'Ir para lista de usuários': 'Voltar para cadastro'}</button>
        {pagina}
      </div>
    );
  }

}

export default App;
