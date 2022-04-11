import React from 'react'
import { useStyles } from './styled'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToLogin } from '../../router/coodinator'

const Header2 = () => {
    const classes = useStyles();
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

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

export default Header2