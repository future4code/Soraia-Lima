import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
overflow-x: hidden;
align-items: center;
header{
    width: 100%;
}
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
div{
    img{
        width: 13vw;
        height: 32vh;
        border-radius: 0.2em;
        cursor: pointer;
}
:hover{
        opacity: 0.7;
    }
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

export const ContainerFilter = styled.div`
background-color: #6518ae;
width: 100vw;
height: 30vh;
span{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 60%;
    margin-left: 20vw;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    h1{
        margin-top: 1em;
        color: white;
        margin-bottom: 5vh;
    },
    p{
        color: white;
    },
}`

export const ContainerMap = styled.div`
button{
    background-color: white;
    border: none;
    margin: 0.5em;
    padding: 0.5em;
    border-radius: 0.2em;
}
`