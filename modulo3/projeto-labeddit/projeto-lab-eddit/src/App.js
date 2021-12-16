import Router from "./router/Router"
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from "react-router-dom";


function App() {

  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    button{
      cursor: pointer;
    }
  }
  `

  return (
    <div >
      <GlobalStyle />
      <Router />

    </div>
  );
}

export default App;
