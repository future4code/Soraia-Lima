import styled from "styled-components";

export const Posts = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
margin-top:5vh;
width: 50%;
margin-left:25%;
h1{
    margin-bottom: 2vh;
}
img{
    width: 3vw;
    height:3vh;

}
form{
    display:flex;
    width: 91%;
    align-items: center;
    margin-bottom: 1vh;
    margin-top: 1vh; 
    box-shadow: 0px 0px 5px 0px orange;
       
    input{
        height: 6vh;
        width: 100%;
        padding: 7px;
        border: 1px solid  orange;

    }
    button{
        width: 4vw;
        height: 6vh;
        background-color: orange;
        border: none;
        border-radius: 1px;
        color:white;
        
        &:hover{
        
        background-color: #ff8210;
        
    }  
    }
}
`

export const Map = styled.div`
display: flex;
flex-direction: column;
width: 45vw ;
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

export const Comment = styled.div`
display: flex;
flex-direction: column;
box-shadow: 0px 0px 5px 0px orange;
border-radius: 5px;
width: 45vw;
margin: 10px;

h4{
    
    display: flex;
    align-items: center;
    text-align: left;
    margin-bottom: 2vh;
    height: 5vh;
   
    img{
        width: 2.5vw;
        height: 4vh;
    }
}

span{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1vh;

    div{
        display: flex;
        width: 5.5vw;
        justify-content: space-between;

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

export const BotaoVoltar = styled.button`
    font-size: 1em;
    width: 10vw;
    height: 5vh;
    background-color: #ff8210;
    border: none;
    border-radius: 3px;
    color:white;
    margin-top: 2vh;
    margin-bottom: 5vh;
    &:hover{
        
        background-color: orange;
        
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