import GlobalState from './context/GlobalState';
import Router from './router/Router'
import { createGlobalStyle } from 'styled-components'


const App = () =>{

  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Times New Roman" !important;
    button{
      cursor: pointer;
    }
  }`

  return (
    <GlobalState>
      <GlobalStyle/>
      <Router />
    </GlobalState>
  );
}

export default App;
