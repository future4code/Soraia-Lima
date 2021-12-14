import styled from "styled-components";

export const FormRegister = styled.div`
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
        background-color:orange;
        border:none;
        margin-bottom: 2vh;
        width: 10vw;
        height:5vh;
        border-radius:5px;
        &:hover{
        background-color: gray;
        color: white;
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

`