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
    input{
        padding:10px;
        width:500px;
        height:40px;
        border-radius: 10px;
        border: 0.5px solid black;
        margin: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    
}
  }
`

export const Container = styled.div`
text-align: center;
`

export const CardsImg = styled.div`
display:flex;
justify-content: space-evenly;
margin-top:2vh;
img{
width: 30vw;
height:20vw;
box-shadow: rgb(0 0 0 / 30%) 10px 10px 10px 0px;
border-radius:9px;
}
p{
    margin-top:5px;
    font-size:1.3em;
}`

export const Inscrever = styled.div`
display:flex;
flex-direction: column;
align-items: center;
div{
    display:flex;
    align-items: center
}
span{
    font-size:27px;
}

button{
    color: white;
    background-color: #274360;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 40px;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 1.5%;
    &:hover{
        background-color: #AAB1BE;
    }
    display:row;
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
h1{
    margin-top:5vh;
    margin-bottom:3vh;
}
button{
    color: white;
    background-color: #274360;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 40px;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 1.5%;
    &:hover{
        background-color: #AAB1BE;
    }
    display:row;
}`

export const Header = styled.header`
background-color: #274360;
color: white;
display:flex;
justify-content: space-between;
align-items: center;
height:7vh;
button{
    margin: 5px;
    border:none;
    background: white;
    height:4vh;
    width: 7vw;
    border-radius: 20px;
    color: #274360;
    font-size:0.9em;
    &:hover{
        background-color: #AAB1BE;
        color:white;       
    }
}
`

export const Footer = styled.footer`
background-color: #274360;
position:absolute;
margin-top:5%;
margin-bottom:0px;
width:100%;
color:gray;
text-align: center;
img{
    width:1.5%
};

p{
margin:5px;
font-size:11px;
}
`

export const Footer2 = styled.footer`
background-color: #274360;
position:fixed;
margin-top:5%;
bottom:0px;
width:100%;
color:gray;
text-align: center;
img{
    width:1.5%
};

p{
margin:5px;
font-size:11px;
}

`

export const PainelAdm = styled.div`
button{
    color: white;
    background-color: #274360;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 40px;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 1.5%;
    display:row;
    margin-bottom: 30px;
    &:hover{
        background-color: #AAB1BE;
    }   
}
p{
    cursor: pointer;
}
h1{
    margin: 10px; 
}
`
export const InfoViagem = styled.div`
display:flex;
flex-direction: colunm;
align-items: center;
width: 410px;
justify-content: space-between;
box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
padding: 10px 20px;
border-radius: 4px;
margin:20px 500px;
p{
    font-size:20px;
    cursor: pointer;
}
img{
    width:30px;
    height:30px;
    cursor:pointer;
}
`

export const InfoViagens = styled.div`
margin-left:35%;
box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
padding: 10px 20px;
border-radius: 4px;
width: 30vw;
height:27vh;
margin-top:20px;
background: linear-gradient(#9198e5, #274360);

p{
    font-size:16px;
    margin: 5px;
}`

export const H1 = styled.h1`
margin: 10px; 
`

export const Botoes = styled.button`
margin: 5px;
border:none;
background: #274360;
height:6vh;
width: 10vw;
border-radius: 20px;
color: white;
font-size:1em;
&:hover{
    background-color: #AAB1BE;  
}
`

export const DetailTrip = styled.div`
padding:1em;
margin-top:5vh;
width:30vw;
margin-left:35%;
text-align:left;
box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
p{
   
    font-size:1.1em;
    margin-top:1vh;
}
button{
margin-top: 2vh;
margin-bottom:2vh;
margin-left:6vw;
border:none;
background: #274360;
height:4.5vh;
width: 5vw;
border-radius: 20px;
color: white;
&:hover{
    background-color: #AAB1BE;  
}
}`

export const BotãoDetalhes = styled.button`
margin: 2vw;
border:none;
background: #274360;
height:4.5vh;
width: 5vw;
border-radius: 20px;
color: white;
&:hover{
    background-color: #AAB1BE;  
}
`
export const H2 = styled.h2`
margin-top: 5vh;
`
export const TextoAventuras = styled.div`
margin-left:37%;
display:flex;
align-items: center;
span{
    font-size:27px;
    margin-left:1vw;
}
h1{
    font-size:35px;
    margin-top:3vh;
    margin-bottom:3vh;
}
`