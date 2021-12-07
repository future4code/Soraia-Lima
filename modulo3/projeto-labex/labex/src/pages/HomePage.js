import {Container, Home} from '../styles'
import { useHistory } from "react-router-dom";

function HomePage() {

    const history = useHistory()

    const paginaVerViagem = () => {
        history.push("/trips/:list")
    }

    const loginAreaAdmin = () =>{
        history.push("/login")
    }

    const paginaAreaAdmin = () =>{
        history.push("/admin-trips-list")
    }

    return (
        <Container>
            <Home>
            <h1>LabeX</h1>
            <button onClick={paginaVerViagem}> Ver Viagens</button>
            <button onClick ={loginAreaAdmin}>loguin de Admin</button>
            <button onClick ={paginaAreaAdmin}>Área de Admin</button>
            </Home>
        </Container>
    )

}

export default HomePage;