import styled from "styled-components";

export const FormLogin = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
margin-top:8vh;
width: 50%;
margin-left:25%;

div{
    display:flex;
    align-items: center;
    flex-direction: column;
    button{
        background-color:#ff8210;
        color: white;
        font-size: 1em;
        border:none;
        margin-bottom: 2vh;
        width: 10vw;
        height:5vh;
        border-radius:5px;
        &:hover{
        background-color: orange;       
        }
    }
}

h1{
    margin-bottom: 5vh;
    font-size:3em;
}
input{
width: 30vw;
margin-bottom:2vh;
height:5vh;
padding:0.5vw;
}

@media screen and  (max-device-width : 667px) {
input{
width: 60vw;
margin-bottom:2vh;
height:5vh;
padding:0.5vw;
}
div{
    button{
        width: 30vw;
    }
}
}
`

export const BotaoCadastrar = styled.button`
color: #ff8210;
background-color: white;
font-size: 1.3em;
border: none;
margin-top: 3vh;
&:hover{
    background-color: orange;
    color: white;
    height: 5vh;
    border-radius: 10px;
    width: 25vw;
}

`