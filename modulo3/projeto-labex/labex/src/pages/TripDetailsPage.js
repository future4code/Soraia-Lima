import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Container, InfoViagem } from '../styles'
import useProtectedPage from '../hooks/useProtectedPage';
import { BASE_URL, ALUNO } from '../components/info';
import Loading from '../components/Loading';
import { H1, DetailTrip, Botoes } from "../styles";

function TripDetailsPage() {

    useProtectedPage()

    const pathParams = useParams()
    const id = pathParams.id
    const history = useHistory()

    const voltarPagAdm = () => {
        history.push("/admin-trips-list")
    }

    const token = localStorage.getItem("token")

    const [informacao, setInformacao] = useState({})
    const [infoCandidato, setInfoCandidato] = useState([])
    const [aprovados, setAprovados] = useState([])

    const getTripDetail = () => {
        axios.get(`${BASE_URL}${ALUNO}/trip/${id}`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            setInformacao(res.data.trip)
            setInfoCandidato(res.data.trip.candidates)
            setAprovados(res.data.trip.approved)
        }).catch((error) => {
            console.log(error.response)
        })
    }

    const decideCandidate = (decide, candidateId) => {
        const body = {
            approve: decide
        }
        axios.put(`${BASE_URL}${ALUNO}/trips/${id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token
            }
        }).then((res) => {
            alert(`Candidato ${decide ? 'aprovado' : 'repovado'} com sucesso!! 😀`)
            getTripDetail()

        }).catch((error) => {
            alert("Desculpe, tivemos um imprevisto, tente mais tarde!", error.response)
        })
    }

    useEffect(() => {
        getTripDetail()
    }, [])


    const mapTrisp = infoCandidato.map((info) => {
        return (
            <div key={info.id}  >

                <p><b>Nome:</b> {info.name}</p>
                <p><b>Profissão:</b> {info.profession}</p>
                <p><b>Idade:</b> {info.age}</p>
                <p><b>Texto da candidatura:</b> {info.applicationText}</p>
                <div>
                    <button onClick={() => { decideCandidate(true, info.id) }}>Aprovar</button>
                    <button onClick={() => { decideCandidate(false, info.id) }}>Reprovar</button>
                </div>
                <hr />
            </div>
        )
    })

    const mapAprovados = aprovados.map((aprov) => {
        return (
            <div key={aprov.id}  >
                <li> {aprov.name}</li>
            </div>
        )
    })
    return (
        <Container>
         
            {informacao.name ? <div>
                <H1>{informacao.name}</H1>
                <DetailTrip>
                    <p><b>Descrição:</b> {informacao.description}</p>
                    <p><b>Planeta:</b> {informacao.planet}</p>
                    <p><b>Duração:</b> {informacao.durationInDays}</p>
                    <p><b>Data:</b> {informacao.date}</p>
                    <div>
                    <button onClick={voltarPagAdm}>Voltar</button>
                    </div>
                </DetailTrip>
                <div>
                <h2>Candidatos Pendentes</h2>
                {mapTrisp.length > 0 ? <div>{mapTrisp}</div> : <p>Não há candidatos pendentes</p>}
                </div>
                <h2>Candidatos Aprovados</h2>
                {mapAprovados.length > 0 ? <div>{mapAprovados}</div> : <p>Ainda não temos nenhum candidato aprovado para essa viagem 😔</p>}
            </div> : <Loading /> }
           
        </Container>
    )
}

export default TripDetailsPage;