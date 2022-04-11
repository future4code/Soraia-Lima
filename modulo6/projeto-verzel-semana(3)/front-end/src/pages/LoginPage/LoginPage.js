import React, { useContext } from "react"
import { Container, useStyles } from "./styled"
import { TextField, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Button } from '@material-ui/core'
import clsx from 'clsx'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import useForm from '../../hooks/useForm'
import GlobalStateContext from '../../context/GlobalStateContext'
import { useNavigate } from "react-router-dom"
import { useUnprotectedPage } from "../../hooks/useUnProtectedPage"

const LoginPage = () => {
    useUnprotectedPage()

    const { requests } = useContext(GlobalStateContext)
    const classes = useStyles();
    const navigate = useNavigate()

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        requests.requestLogin(form, navigate)
    }

    return (
        <Container>
            <h1>Login</h1>

            <form className={classes.root} noValidate onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    className={classes.margin}
                    label="E-mail"
                    variant="outlined"
                    required
                    value={form.email}
                    name='email'
                    onChange={onChange}
                />

                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" required>Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={form.password}
                        name='password'
                        onChange={onChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={50}
                    />
                </FormControl>
                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Entrar </Button>
            </form>
        </Container>
    )
}

export default LoginPage