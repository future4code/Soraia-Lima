import { Container, InfoViagens, H1 } from '../styles'
import { useHistory } from 'react-router-dom'
import { useResquestData } from '../hooks/useResquestData'
import Loading from '../components/Loading';
import Footers from '../components/Footers';
import { Botoes } from '../styles';

function ListTripsPage() {

    const history = useHistory()

    const signUp = () => {
        history.push("/trips-application")
    }
    const trips = useResquestData()

    //-----------------------MAP  VER VIAGENS ----------------------
    const mapTrips = trips.map((trip) => {
        return (
            <InfoViagens key={trip.id}>
                <p><b>Nome:</b> {trip.name}</p>
                <p><b>Descrição:</b> {trip.description}</p>
                <p><b>Planeta:</b> {trip.planet}</p>
                <p><b>Duração:</b> {trip.durationInDays}</p>
                <p><b>Data:</b> {trip.date}</p>
            </InfoViagens>
        )
    })

    return (
        <Container>
            <div>
                <H1>Lista de Viagens</H1>
                <Botoes onClick={signUp}>Inscrever-se</Botoes>
                <div>
                    {trips.length > 0 ? <div>{mapTrips}<Footers /></div> : <Loading />}
                </div>
            </ div>
        </Container>
    )
}
export default ListTripsPage;