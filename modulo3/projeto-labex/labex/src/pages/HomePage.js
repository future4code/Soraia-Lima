import { Container, Home } from '../styles'
import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory()

    const paginaVerViagem = () => {
        history.push("/trips/:list")
    }

    const token = localStorage.getItem("token")

    const loginAreaAdmin = () => {
        if (token === null) {
            console.log("Não está logado")
            history.push("/login")
        } else {
            history.push("/admin-trips-list")
        }
    }

    return (
        <Container>
            <Home>
                <h1>LabeX</h1>
                <button onClick={paginaVerViagem}> Ver Viagens</button>
                <button onClick={loginAreaAdmin}>Área de Admin</button>
            </Home>
        </Container>
    )

}

export default HomePage;