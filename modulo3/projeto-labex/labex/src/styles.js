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
}
`

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
/* width:400px;
margin-left:39%;
text-align:left; */
p{
    font-size:18px;
    margin-top:5px;
}
button{
margin: 5px;
border:none;
background: #274360;
height:4.5vh;
width: 5vw;
border-radius: 20px;
color: white;
&:hover{
    background-color: #AAB1BE;  
}
}

`