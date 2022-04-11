import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles'

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
    }
}))


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    header{
        width: 100%;
    }
    h1{
        margin-top: 10vh;
        margin-bottom: 7vh;
    }
    form{
        text-align: center;
        display: flex;
        flex-direction: column;
    }
`

