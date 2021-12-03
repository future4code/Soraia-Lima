import TelaInicial from './Components/TelaInicial'
import TelaMatch from './Components/TelaMatch'
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
}

`

function App() {
  const [pagina, setPagina] = useState("TelaInicial")

  const mudarDePagina = () => {

    switch (pagina) {
      case "TelaInicial":
        return <TelaInicial
          irParaMatch={irParaMatch}
        />
      case "TelaMatch":
        return <TelaMatch
          irParaInicio={irParaInicio}
        />
      default:
        return <div>Erro! Tela não enontrada</div>
    }
  }

  const irParaMatch = () => {
    setPagina("TelaMatch")
  }
  const irParaInicio = () => {
    setPagina("TelaInicial")
  }

  return (
    <div >
      <GlobalStyle />
      {mudarDePagina()}
    </div>
  );
}

export default App;
