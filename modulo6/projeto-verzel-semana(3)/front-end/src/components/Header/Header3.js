import React from 'react'
import { useStyles } from './styled'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../router/coodinator'

const Header3 = () => {
    const classes = useStyles();
    const navigate = useNavigate()

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

export default Header3