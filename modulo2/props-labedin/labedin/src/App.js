import React from 'react';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemSoraia from "./imagemSoraia/Soraia1.jpg";
import imagemClinica from "./imagemClinica/clinicaPsicologia.jpg";
import imagemFaculdade from './imagemFaculdade/unicesumar.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

const AppContainer = styled.div `
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
`

const TitulosContainer = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <PageSectionContainer>
        <TitulosContainer>Dados pessoais</TitulosContainer>
        <CardGrande 
          imagem={imagemSoraia}
          nome="Soraia" 
          descricao="Oi, eu sou a Soraia. Sou estudante da Labenu. Estou gostando bastante do curso de Full Stack, espero conseguir ser uma excelente profissional, após me formar."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem ="data:image/png;base64,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"
        nomeCardP = "Email:"
        endereconomeCardP= "soraia100@gmail.com"        
        />

        <CardPequeno 
        imagem="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-house-location-icon-png-image_1701248.jpg"
        nomeCardP = "Endereço:"
        endereconomeCardP = "Brasilia - DF"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TitulosContainer>Experiências profissionais</TitulosContainer>
        <CardGrande 
          imagem={imagemClinica}
          nome="Clinica de Psicologia Equilibrio do Ser"
          descricao="Faturamento de guias de convênios médicos." 
        />
        
        <CardGrande 
          imagem={imagemFaculdade}
          nome="UniCesumar" 
          descricao="Coordenadora de Polo." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TitulosContainer>Minhas redes sociais</TitulosContainer>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
