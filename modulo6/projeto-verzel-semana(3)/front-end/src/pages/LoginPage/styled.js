import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        margin-top: 10vh;
        margin-bottom: 3vh;
    }
    form{
        text-align: center;
        display: flex;
        flex-direction: column;
    }
`


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '30vw'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(2),
        width: '20vw',
        marginLeft: theme.spacing(10),
    }
}));