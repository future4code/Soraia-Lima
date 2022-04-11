import React from "react"
import { Container, useStyles, ContainerClass } from "./styled"
import { Button, Card, CardHeader, CardContent, Avatar, Typography, CardActions } from '@material-ui/core'
import { useRequestedModule } from "../../hooks/useRequestModule"
import { goToHomeClass } from "../../router/coodinator"
import { useNavigate } from "react-router-dom"
import Loading from '../../components/Loading/Loading'

const HomePage = () => {

    const modulos = useRequestedModule()
    const classes = useStyles()
    const navigate = useNavigate()

    const mapModulos = modulos.map((item) => {
        return (
            < Card key={item.id}  className={classes.root2}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar} > M</Avatar>
                    }
                    title={item.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        Aproveite esse módulo, e se torne um dev cada vez mais capacitado!
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button variant="outlined" color="primary" onClick={() => goToHomeClass(navigate, item.id)}>Saiba mais!</Button>
                </CardActions>
            </Card>
        )
    })

    return (
        <Container>
            { modulos.length > 0 ?
            <>
            <h1>Olá, seja bem-vindo!</h1>
            <h3>Conheça os módulos disponíveis na EmpresaX </h3>

            <ContainerClass>
                {mapModulos}
            </ContainerClass>
            </> : <Loading/>
            }
            
        </Container>
    )
}

export default HomePage