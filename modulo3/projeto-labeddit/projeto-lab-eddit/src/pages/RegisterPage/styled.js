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
        color: white;
        background-color: #ff8210;
        font-size: 1.3em;
        border: none;
        margin-top: 3vh;
        height: 5vh;
        border-radius: 10px;
        width: 10vw;
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
    width:65vw;
}
div{
    button{
        width: 30vw;
    }
}
}
`