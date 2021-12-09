import { Container, Home } from '../styles'
import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory()

    // PAG VER VIAGEM
    const pageSeeTrip = () => {
        history.push("/trips/:list")
    }
    const areAdmin = () => {
        history.push("/admin-trips-list")
    }

    return (
        <Container>
            <Home>
                <h1>LabeX</h1>
                <button onClick={pageSeeTrip}> Ver Viagens</button>
                <button onClick={areAdmin}>Área de Admin</button>
            </Home>
        </Container>
    )

}

export default HomePage;