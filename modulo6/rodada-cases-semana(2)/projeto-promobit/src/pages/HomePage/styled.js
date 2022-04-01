import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
overflow-x: hidden;
align-items: center;
main{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-top: 6vh;
    margin-left: 10vw;
}
footer{
    margin-top: 2vh;
    margin-bottom: 2vh;
}
`

export const MapMoveis = styled.div`
display: flex;
flex-direction: column;
width: 16vw;
img{
    width: 13vw;
    height: 32vh;
    border-radius: 0.2em;
    cursor: pointer;
}
h3{
    font-size: 0.9em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    margin-top: 0.6em;
    margin-bottom: 1vh;;
    width: 80%;

}
p{
    color: gray;
    font-size: 0.7em;
    margin-bottom: 1.5vh;;
}
`