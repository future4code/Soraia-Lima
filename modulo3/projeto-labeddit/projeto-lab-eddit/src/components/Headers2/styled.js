import styled from "styled-components"

export const Header2 = styled.header`
width: 100%;
height: 10vh;
background-color: #ff8210;
padding: 10px;
align-items: center;

img{
    width: 8vw;
    height:8vh;
    cursor: pointer;
}

@media screen and  (max-device-width : 667px) {
img{
    width:20vw;
}

}
`