import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    button{
      cursor: pointer;
    }
  }
`

export const Container = styled.div`
text-align: center;`

export const Home = styled.div`
margin-top: 20%;
h1{
    color: slategray;
}
button{
    color: white;
    background-color: slategray;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 40px;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 1.5%;
    &:hover{
        background-color: gray;
    }
}`

export const Inscrever = styled.div`
display:flex;
flex-direction: column;
align-items: center;

button{
    color: white;
    background-color: slategray;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 40px;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 1.5%;
    &:hover{
        background-color: gray;
    }
    display:row;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
input{
    width:500px;
    height:40px;
    border-radius: 10px;
    border: 0.5px solid black;
    margin: 10px;
}
select{
    width:500px;
    height:40px;
    border-radius: 10px;
    margin: 10px;
}`

export const Login = styled.div`
display:flex;
flex-direction: column;
align-items: center;

input{
    width:500px;
    height:40px;
    border-radius: 10px;
    border: 0.5px solid black;
    margin: 10px;
}
button{
    color: white;
    background-color: slategray;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 40px;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 1.5%;
    &:hover{
        background-color: gray;
    }
    display:row;
}`

export const Header= styled.header`
background-color: pink;
`
export const PainelAdm = styled.div`
button{
    color: white;
    background-color: slategray;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 40px;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 1.5%;
    &:hover{
        background-color: gray;
    }
    display:row;
    margin-bottom: 30px;
}
p{
    cursor: pointer;
}
`
export const InfoViagem = styled.div`
display:flex;
flex-direction: colunm;
align-items: center;
width: 500px;
justify-content: space-between;
box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
padding: 10px 20px;
border-radius: 4px;
margin: 10px 450px;
border-radius: 4px;

button{
    width: 3vw;
    height:20px;
}`