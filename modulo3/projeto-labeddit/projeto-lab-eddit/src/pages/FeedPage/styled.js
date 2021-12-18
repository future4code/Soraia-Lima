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

export const Filtro = styled.div`
input{
    width: 44vw;;
    height: 5.5vh;
    border-radius: 5px;
    padding: 10px;
    margin-bottom:3vh;
    border: 1px solid #ff8210;
}
`

export const Formulario = styled.div`
margin-bottom: 5vh;
width: 90%;
box-shadow: 0px 0px 5px 0px orange;
h1{
    margin-top: 3vh;
}
form{
    display: flex;
    flex-direction: column;
    text-align:center;
    align-items: center;
   
    input{
        width: 35vw;
        margin-top:2vh;
        height:5vh;
        padding:0.5vw;
    }
button{
    width: 8vw;
    height: 4.5vh;
    margin: 2vh;   
    background-color: #ff8210;
    border: none;
    border-radius: 3px;
    color:white;
    &:hover{
        background-color: orange;
        }
    }
}`

export const Map = styled.div`
display: flex;
flex-direction: column;
width: 90%;
align-items: stretch;
box-shadow: 0px 0px 5px 0px orange;
margin: 10px;
p{
    cursor: pointer;        
}
h2{
    margin-bottom: 2vh;
}
h4{
    display: flex;
    align-items: center;
    text-align: left;
    border-bottom: 1px solid orange;
    margin-bottom: 2vh;
    height: 5vh;
   
    img{
        width: 2.5vw;
        height: 4vh;
        }
}

span{
    margin-top: 2vh;
    padding: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    
    div{
        display: flex;
        flex-direction: row;
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