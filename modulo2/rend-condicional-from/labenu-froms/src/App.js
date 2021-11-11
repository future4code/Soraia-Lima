import React from 'react'
import DadosGerais from './Components/DadosGerais';
import Final from './Components/Final';
import InfoNSuperior from './Components/InfoNSuperior';
import InfoSuperior from './Components/InfoSuperior';
import styled from 'styled-components';

const Container = styled.div `
text-align: center
`

const Botao = styled.button `
margin-top: 20px
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />;
        break;
      case 2:
        return <InfoSuperior />
        break;
      case 3:
        return <InfoNSuperior />
        break
      case 4:
        return <Final />
        break;
      default:
        return "Pagina não encontrada"
        break;
    }
  }

  proximaEtapa = () => { 
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {

    return (
      <Container >
        {/* <DadosGerais/> */}
        {/* <InfoSuperior/> */} 
        {/* <InfoNSuperior/> */}
        {/* <Final/> */}
        {this.renderizaEtapa()}
        {this.state.etapa < 4 && (<Botao onClick={this.proximaEtapa}>Próxima Etapa</Botao>)} 

      </Container>
    );
  }
}

export default App;
