import styled from "styled-components";

export const Posts = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
margin-top:8vh;
width: 50%;
margin-left:25%;
border:1px solid red;
img{
    width: 3vw;
    height:3vh;

}
form{
    display:flex;
    width: 40vw;
    /* border: 1px solid green;  */
    flex-direction: column;
    align-items: center;
    
    input{
        height: 10vh;
        width: 100%;
        padding: 7px;

    }
    button{
        width: 10vw;
        height: 4vh;
        margin-top: 0.5vh;
        
    }
}
`
export const PostFooter = styled.div`
height: 4vh;
display: flex;
align-items: center;
padding: 0 10px;
justify-content: space-between;
border: 1px solid black;
width: 40vw;
text-align: center;
span{
    display:flex;
    /* height:2vh; */
    /* width: 3vw; */
    }
`

export const TextPost = styled.div`
border: 1px solid red;
width: 40vw;
height: 10vh;
`