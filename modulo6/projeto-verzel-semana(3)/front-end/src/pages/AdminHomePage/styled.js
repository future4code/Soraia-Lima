import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        margin-top: 5vh;
        margin-bottom: 3vh;
    },
    h2{
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
   
`

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root2: {
        width: 330,
        backgroundColor: '#90ee90',
        margin: theme.spacing(1),
    },
    cardButton:{
        display: 'flex',
        justifyContent: 'space-around'
    }

}))