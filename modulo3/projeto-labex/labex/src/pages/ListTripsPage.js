import {Container, InfoViagens} from '../styles'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import  { useResquestData } from '../hookes/getTrips'

function ListTripsPage () {
    // const [viagens, setViagens] = useState ([])

    const history = useHistory()

    const paginaVoltarHome = () => {
        history.goBack()
    }

    const paginaIncreverSe = () => {
        history.push("/trips-application")
    }

    const viagem = useResquestData()

    //------------------------------ VER TODAS VIAGENS --------------------
    // const getTrips =() =>{
    //     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/soraia-aparecida-carver/trips').then((res)=>{
    //         console.log(res.data.trips)
    //         setViagens(res.data.trips)
    //     }).catch((error)=>{
    //         console.log(error.response)
    //     })
    // }

    // useEffect(()=>{
    //     getTrips()
    // },[])

    // console.log("viagens", viagem)

//-----------------------MAP  VER VIAGENS ----------------------
    const mapViagens = viagem.map ((viagem) =>{
        return(
            <InfoViagens key={viagem.id}>
                    <p><b>Nome:</b> {viagem.name}</p>
                    <p><b>Descrição:</b> {viagem.description}</p>
                    <p><b>Planeta:</b> {viagem.planet}</p>
                    <p><b>Duração:</b> {viagem.durationInDays}</p>
                    <p><b>Data:</b> {viagem.date}</p>        
            </InfoViagens>
        
        )
    })

    
    return(
        <Container>
            <div>
            <button onClick={paginaVoltarHome}>Voltar</button>
            <button onClick={paginaIncreverSe}>Inscrever-se</button>
            <h1>Lista de Viagens</h1>
            <div>
                {viagem.length > 0 ? <div>{mapViagens}</div> : <h2>Carregando...</h2>}
               
            </div>
            </div>
        </Container>
    )
}
export default ListTripsPage;