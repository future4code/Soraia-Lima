import React, { useContext } from "react"
import { Container, useStyles } from "./styed"
import { TextField, Button } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate } from "react-router-dom"
import useForm from '../../hooks/useForm'
import GlobalStateContext from "../../context/GlobalStateContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"

const CreateModulePage = () => {
    useProtectedPage()

    const { requests } = useContext(GlobalStateContext)

    const [form, onChange, cleanFields] = useForm({
        name: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        requests.requestCreateModule(form)
        cleanFields()
    }

    const classes = useStyles()
    const navigate = useNavigate()
    
    return (
        <Container>
            <h1>Castrar novo módulo</h1>
            <form className={classes.root} noValidate onSubmit={handleSubmit}>
                <TextField
                    className={classes.margin}
                    label="Nome do módulo"
                    variant="outlined"
                    required
                    value={form.name}
                    name='name'
                    onChange={onChange}
                />

                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Casdastrar </Button>
            </form>
            <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
        </Container>
    )
}

export default CreateModulePage