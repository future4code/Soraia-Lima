import styled from "styled-components"

export const Header = styled.header`
width: 100%;
height: 10vh;
display:flex;
background-color: #ff8210;
padding: 10px;
align-items: center;
justify-content: space-between;
img{
    width: 8vw;
    height:8vh;
    margin-right: 2vw;
    cursor: pointer;
}

button{
    background-color: white;
    border: none;
    width: 6vw;
    height:4vh;
    border-radius:5px;
    font-size: 0.9em;
    &:hover{
        background-color: gray;
        color: white;
    }
}

@media screen and  (max-device-width : 667px) {
img{
    width:20vw;
}
button{
    font-size: 0.8em;
    width: 13vw;
    height:3.5vh;
    color: orange;
}
}
`