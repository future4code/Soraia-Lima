import styled from "styled-components"

export const BotaoLike = styled.button`
width: 1.8vw;
height : 3.5vh;
font-size: 1em;
border-radius: 3px;
font-size: 15px;
border: 1px solid blue;
color: blue;
background-color: white;
&:hover{
    color: white;
    background-color: blue;
    }

@media screen and  (max-device-width : 667px) {
    width: 3.5vw;
    height : 3vh;
}
`

export const BotaoLike2 = styled.button`
width: 1.8vw;
height : 3.5vh;
font-size: 1em;
border-radius: 3px;
font-size: 15px;
border: 1px solid blue;
color: white;
background-color: blue;

@media screen and  (max-device-width : 667px) {
    width: 3.5vw;
    height : 3vh;
}
`

export const BotaoDeslike = styled.button`
width: 1.8vw;
height : 3.5vh;
font-size: 1em;
border-radius: 3px;
font-size: 15px;
border: 1px solid red;
color: red;
background-color: white;
margin-right: 0.5vw;
&:hover{
    color: white;
    background-color: red;
    }

@media screen and  (max-device-width : 667px) {
    width: 3.5vw;
    height : 3vh;
}
`

export const BotaoDeslike2 = styled.button`
width: 1.8vw;
height : 3.5vh;
font-size: 1em;
border-radius: 3px;
font-size: 15px;
border: 1px solid red;
color: white;
background-color: red;

@media screen and  (max-device-width : 667px) {
    width: 3.5vw;
    height : 3vh;
}
`