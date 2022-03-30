import styled from 'styled-components'

export const Container = styled.div`
background-color: #6518ae;
width: 100vw;
height: 30vh;
span{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: red; */
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