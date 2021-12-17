import styled from "styled-components"

export const Container = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
margin-top:3vh;
width: 50%;
margin-left:25%;
border:1px solid red;
word-break: break-all;

form{
    display: flex;
    flex-direction: column;
    text-align:center;
    input{
width: 30vw;
margin-top:2vh;
height:5vh;
padding:0.5vw;
}
}
`
export const Map = styled.div `
display: flex;
flex-direction: row;
width: 40vw;
height: 5vh;
border: 1px solid black;
justify-content: space-between;
align-items: center;
button{
    cursor: pointer;
}
div{
    display: flex;
    flex-direction: row;
    width: 8vw;
    justify-content: space-between;
}
`

export const BotaoLike = styled.button`
width: 2.5vw;
height : 3.5vh;
font-size: 1em;
border-radius: 50%;
font-size: 15px;
border: 1px solid blue;
color: blue;
background-color: white;
& :hover{
    color: red;
}

`

export const BotaoDeslike = styled.button`
width: 2.5vw;
height : 3.5vh;
font-size: 1em;
border-radius: 50%;
font-size: 15px;
border: 1px solid red;
color: red;
background-color: white;
& :hover{
    color: white;   
    background: red;
}
`