import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1vw;
    h1{
        margin-top: 2vh;
    },
    h3{
        margin-top: 5vh;
        margin-bottom: 3vh;
    },
    /* section{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    } */
`
export const ContainerClass = styled.div`
width: 80%;
margin-left: 5vw;
display: flex;
align-items: center;
flex-wrap: wrap;
`

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 340,
        margin: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: "#00a000",
    },
    root2: {
        margin: theme.spacing(2),
    },
}))