import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    header{
        width: 100%;
        margin-top: -1.5vh;
    }
    h1{
        margin-top: 5vh;
        margin-bottom: 3vh;
    },
    h2{
        margin-top: 3vh;
        margin-bottom: 3vh;
    }   
`
export const ContainerClass = styled.div`
width: 50%;
margin-left: 5vw;
margin-bottom: 5vh;
display: flex;
align-items: center;
flex-wrap: wrap;
`


export const QtdClass = styled.div`
display: flex;
align-items: center;
margin-bottom: 2v;
p{
    margin-left: 0.5vw;
}`

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
    cardButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }

}))