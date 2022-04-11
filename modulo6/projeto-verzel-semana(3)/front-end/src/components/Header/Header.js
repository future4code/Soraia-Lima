import React from 'react'
import { useStyles } from './styled'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToAdminHome, goToHome, goToLogin } from '../../router/coodinator'

const Header = (id) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const location = useLocation()
  
    const logout = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

    const homeHeader = () => {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title} onClick={() => goToHome(navigate)}>
                            EmpresaX
                        </Typography>
                        <Button color="inherit" onClick={() =>goToAdminHome(navigate)}>Área Admin</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    const adminHeader = () => {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title} onClick={() => goToHome(navigate)}>
                            EmpresaX
                        </Typography>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    const loginHeader = () => {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title} onClick={() => goToHome(navigate)}>
                            EmpresaX
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    const notPage = () => {
        return <></>
    }

    const changeHeader = () => {

        switch (location.pathname) {
            case '/':
                return homeHeader();
            case '/cadastrar-modulo':
                return adminHeader()
            case '/cadastrar-aula':
                return adminHeader()
            case '/entrar':
                return loginHeader();
            case '/admin':
                return adminHeader();
            default:
                return notPage()
        }
    }

    return (
        <>{changeHeader()}</>
    )

}

export default Header