import React from "react";
import styled from "styled-components";
import Imagem1 from '../imagens/imagem1.jpg'
import Imagem4 from '../imagens/imagem4.jpg'

const Texto = styled.div`
text-align: center;
margin-top:7vh;
font-size:25px;

img{
  width:25vw;
  height:30vh;
  margin: 25px;
}

`

class Home extends React.Component {
  render(){
    return (
      <Texto>
      <h3>Seja bem-vindo(a) ao labefy! </h3>

      <img src={Imagem1}/>
      <img src={Imagem4}/>
      {/* <button onClick={this.props.irParaLista}>Ir para lista de musicas</button> */}

        
      </Texto>
    );
  }
}

export default Home;