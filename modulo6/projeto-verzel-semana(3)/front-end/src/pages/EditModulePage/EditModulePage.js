import React, { useContext, useEffect, useState } from "react"
import { Container, useStyles } from "./styled"
import { TextField, Button } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate, useParams } from "react-router-dom"
import useForm from '../../hooks/useForm'
import GlobalStateContext from "../../context/GlobalStateContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import Header2 from "../../components/Header/Header2"
import Loading from '../../components/Loading/Loading'
import { getModuleById } from "../../services/services"

const EditModulePage = () => {
    useProtectedPage()

    const { requests } = useContext(GlobalStateContext)
    const pathParams = useParams()
    const id = pathParams.id

    const [module, setModule] = useState([])

    useEffect(() => {
        getModuleById(id, setModule)
    }, [module])

    const classes = useStyles()
    const navigate = useNavigate()

    const [form, onChange, cleanFields] = useForm({ name: "" })

    const handleSubmit = (event) => {
        event.preventDefault();
        requests.requestEditModule(id, form)
        cleanFields()
    }

    return (
        <Container>
            <header>
                <Header2 />
            </header>

            {module.name ?
                <>
                    <h1>Editar nome do módulo</h1>

                    <form className={classes.root} noValidate onSubmit={handleSubmit}>
                        <TextField
                            className={classes.margin}
                            label={module.name}
                            variant="outlined"
                            value={form.name}
                            placeholder={"Nome"}
                            name='name'
                            onChange={onChange}
                        />

                        <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Editar </Button>
                    </form>

                    <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
                </> : <Loading />
            }
        </Container>
    )
}

export default EditModulePage