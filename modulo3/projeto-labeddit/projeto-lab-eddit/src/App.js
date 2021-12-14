import Router from "./router/Router"
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


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
