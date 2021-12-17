import styled from "styled-components"

export const Container = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
margin-top:3vh;
width: 50%;
margin-left:25%;
word-break: break-all;
`

export const Formulario = styled.div`

    width: 90%;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    h2{
    margin-top: 2vh;
}
    form{
    display: flex;
    flex-direction: column;
    text-align:center;
    align-items: center;
    
    input{
width: 30vw;
margin-top:2vh;
height:5vh;
padding:0.5vw;
}
button{
    width: 5vw;
    height: 3.5vh;
    margin: 2vh;   
}
}`

export const Map = styled.div `
display: flex;
flex-direction: column;
width: 90%;
align-items: stretch;
/* 
height: 5vh;
border: 1px solid black;
justify-content: space-between; */
/* align-items: center; */
border: 1px solid gray;
margin: 10px;

h5{
    cursor: pointer;
         
}
h3{
    
    display: flex;
    align-items: center;
   text-align: left;
    
    img{
        width: 2.5vw;
        height: 4vh;
    }
}
span{
    padding: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    
    div{
        display: flex;
    flex-direction: row;
    /* width:5vw; */
    justify-content: space-between;
    align-items: center;
   
    }
    p{
        margin-left:5px;
        margin-right:5px;
    }
}
`

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

`