import React, { useContext, useEffect } from "react"
import { Container, useStyles, ContainerClass, QtdClass } from "./styled"
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { goToAdminHome, editClass } from "../../router/coodinator"
import { useNavigate, useParams } from "react-router-dom"
import Header2 from "../../components/Header/Header2"
import GlobalStateContext from "../../context/GlobalStateContext"
import { useRequestedModule } from "../../hooks/useRequestModule"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import Loading from "../../components/Loading/Loading"

const ClassePage = () => {
    useProtectedPage()

    const classes = useStyles()
    const navigate = useNavigate()

    const pathParams = useParams()
    const id = pathParams.id

    const { states, setters, requests } = useContext(GlobalStateContext)
    const modulos = useRequestedModule()

    const filterModule = modulos.filter((item) => {
        return item.id == id
    })

    useEffect(() => {
        setters.setClasse(requests.requestGetClasse(id))
    }, [])

    const qtdClass = `${states.classe?.length} aulas`

    const mapClasse = states.classe?.map((item) => {
        return (
            <Card className={classes.root2} key={item.id}>
                <CardContent >
                    <Typography gutterBottom variant="h5" >
                        {item.name}
                    </Typography>
                    <p>Disponível em: {item.classDate}</p>
                </CardContent>
                <CardActions className={classes.cardButton} >
                    <Button size="small" onClick={() => editClass(navigate, item.id)}>Editar</Button>

                    {/* Ele não deixa exluir uma aula, diz que não estou passando o headers de autorização */}
                    <Button size="small" onClick={() => requests.requestDeleteClasse(item.id)}>Excluir  </Button>
                </CardActions>
            </Card>
        )
    })

    const name = filterModule[0]?.name

    return (
        <Container >
            <header>
                <Header2 />
            </header>
            {
                states.classe?.length > 0 ?
                    <>
                        <h1>{name}</h1>

                        <QtdClass>
                            <OndemandVideoIcon color="primary" /><p>{qtdClass}</p>
                        </QtdClass>

                        <h2>Programação</h2>
                        <ContainerClass>
                            {mapClasse}
                        </ContainerClass>
                        <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
                    </> : <Loading />
            }
        </Container >
    )
}

export default ClassePage