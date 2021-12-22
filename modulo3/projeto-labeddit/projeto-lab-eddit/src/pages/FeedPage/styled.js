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

@media screen and  (max-device-width : 667px) {
width: 80%;
margin-left:10%;
}
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
@media screen and (max-device-width : 667px) {
    input{
        width: 72vw;
    }
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
}
@media screen and (max-device-width : 667px) {
    h1{
        font-size: 1.7em;
    }
    form{
        input{
            width: 60vw;
        }
        button{
            width: 20vw;
            height: 3.5vh;
        }
    }
}
`

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

@media screen and (max-device-width : 667px) {
    h4{
       img{
           width: 7vw;
       }
   }
}
`