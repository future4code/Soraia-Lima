import TelaInicial from './Components/TelaInicial'
import TelaMatch from './Components/TelaMatch'
import { createGlobalStyle } from 'styled-components';
import {useState} from 'react'
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
}

`

function App() {
  const [pagina, setPagina] = useState ("TelaInicial")

  const mudarDePagina = () =>{

    switch (pagina) {
      case "TelaInicial":
        return <TelaInicial
        irParaMatch={irParaMatch}/>
      case "TelaMatch":
        return <TelaMatch
        irParaInicio={irParaInicio}/>
      default:
        return <div>Erro! Tela não enontrada</div>
    }
  }

  const irParaMatch = () =>{
    setPagina("TelaMatch")
  }
  const irParaInicio = () =>{
    setPagina("TelaInicial")
  }

  // --------------- LIMPAR --------------
const clear = () =>{
  axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/clear').then(()=>{
      console.log('limpou')
  }).catch((error)=>{
      console.log(error.response)
  })

}
  
  return (
    <div >
     <GlobalStyle/>
    {mudarDePagina()}
    <div>
    <button onClick={clear}>Limpar</button>
    </div>
    </div>
  );
}

export default App;
