import React, { useContext } from "react"
import { Container, useStyles } from "./styled"
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate } from "react-router-dom"
import { useRequestedModule } from "../../hooks/useRequestModule"
import useForm from '../../hooks/useForm'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import GlobalStateContext from "../../context/GlobalStateContext"

const CreateClassPage = () => {
    useProtectedPage()

    const classes = useStyles()
    const navigate = useNavigate()

    const modulos = useRequestedModule()
    const { requests } = useContext(GlobalStateContext)

    const [form, onChange, cleanFields] = useForm({
        name: "",
        classDate: "",
        moduleId: ""
    })

    const mapModule = modulos.map((item) => {
        return (
            <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
        )
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        requests.requestCreateClasse(form)
        cleanFields()
    }

    return (
        <Container>
            <h1>Castrar nova aula</h1>

            <form className={classes.root} noValidate onSubmit={handleSubmit}>
                <FormControl variant="outlined" className={classes.margin}>
                    <InputLabel >Módulo</InputLabel>
                    <Select
                        value={form.moduleId}
                        name="moduleId"
                        onChange={onChange}
                        label="Módulo"
                        required
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {mapModule}
                    </Select>
                </FormControl>

                <TextField
                    className={classes.margin}
                    label="Nome da aula"
                    variant="outlined"
                    required
                    value={form.name}
                    name='name'
                    onChange={onChange}
                />
                <TextField
                    className={classes.margin}
                    label="Data da aula"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{ shrink: true, }}
                    required
                    value={form.classDate}
                    name='classDate'
                    onChange={onChange}
                />
                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Casdastrar </Button>
            </form>
            
            <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
        </Container>
    )
}

export default CreateClassPage