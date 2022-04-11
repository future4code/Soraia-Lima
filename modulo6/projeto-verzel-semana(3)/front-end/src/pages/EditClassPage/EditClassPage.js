import React, { useContext, useEffect, useState } from "react"
import { Container, useStyles } from "./styled"
import { TextField, Button } from '@material-ui/core'
import { useNavigate, useParams } from "react-router-dom"
import useForm from '../../hooks/useForm'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import GlobalStateContext from "../../context/GlobalStateContext"
import Header2 from "../../components/Header/Header2"
import { getClasseById } from '../../services/services'

const EditClassPage = () => {
    useProtectedPage()

    const classes = useStyles()
    const navigate = useNavigate()

    const { requests } = useContext(GlobalStateContext)
    const [classe, setClasse] = useState([])

    const pathParams = useParams()
    const id = pathParams.id

    useEffect(() => {
        getClasseById(id, setClasse)
    }, [])

    const [form, onChange, cleanFields] = useForm({
        name: "",
        classDate: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        requests.requestEditClasse(id, form)
        cleanFields()
    }

    return (
        <Container>
            <header>
                <Header2 />
            </header>
            <h1>Editar informações da aula </h1>

            <form className={classes.root} noValidate onSubmit={handleSubmit}>
                <TextField
                    className={classes.margin}
                    label={classe.name}
                    variant="outlined"
                    value={form.name}
                    name='name'
                    onChange={onChange}
                    placeholder={"Nome da aula"}
                />
                <TextField
                    className={classes.margin}
                    label={classe.classDate}
                    variant="outlined"
                    type="date"
                    InputLabelProps={{ shrink: true, }}
                    value={form.classDate}
                    name='classDate'
                    onChange={onChange}
                />
                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Editar aula </Button>
            </form>

            <Button color="primary" onClick={() => navigate(-1)}>Voltar</Button>
        </Container>
    )
}

export default EditClassPage