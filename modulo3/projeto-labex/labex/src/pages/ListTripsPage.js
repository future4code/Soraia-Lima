import {Container, InfoViagens} from '../styles'
import {useHistory} from 'react-router-dom'
import  { useResquestData } from '../hooks/useResquestData'

function ListTripsPage () {

    const history = useHistory()

    //VOLTAR AO HOME
    const backToStart = () => {
        history.push("/")
    }
    const signUp = () => {
        history.push("/trips-application")
    }
    const trips = useResquestData()

//-----------------------MAP  VER VIAGENS ----------------------
    const mapTrips = trips.map ((trip) =>{
        return(
            <InfoViagens key={trip.id}>
                    <p><b>Nome:</b> {trip.name}</p>
                    <p><b>Descrição:</b> {trip.description}</p>
                    <p><b>Planeta:</b> {trip.planet}</p>
                    <p><b>Duração:</b> {trip.durationInDays}</p>
                    <p><b>Data:</b> {trip.date}</p>        
            </InfoViagens>
        
        )
    })
    
    return(
        <Container>
            <div>
            <button onClick={backToStart}>Voltar</button>
            <button onClick={signUp}>Inscrever-se</button>
            <h1>Lista de Viagens</h1>
            <div>
                {trips.length > 0 ? <div>{mapTrips}</div> : <h2>Carregando...</h2>}
               
            </div>
            </div>
        </Container>
    )
}
export default ListTripsPage;