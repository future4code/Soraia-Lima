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
    withoutLabel: {
        marginTop: theme.spacing(2),
        width: '15vw',
        marginLeft: theme.spacing(13),
        marginBottom: theme.spacing(4)
    },
    margin: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),        
      },
}))