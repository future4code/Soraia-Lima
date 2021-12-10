import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Container, InfoViagem } from '../styles'
import useProtectedPage from '../hooks/useProtectedPage';


function TripDetailsPage() {

    useProtectedPage()

    // const aluno = ("soraia-aparecida-carver")
    const pathParams = useParams()
    const id = pathParams.id

    console.log("Path", pathParams)

    const history = useHistory()

    const voltarPagAdm = () => {
        history.push("/admin-trips-list")
    }
    const token = localStorage.getItem("token")

    const [informacao, setInformacao] = useState({})
    const [infoCandidato, setInfoCandidato] = useState([])
    const [aprovados, setAprovados] = useState([])



    const getTripDetail = () => {
                   
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Soraia/trip/${id}`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            console.log(res.data.trip)
            setInformacao(res.data.trip)
            setInfoCandidato(res.data.trip.candidates)
            setAprovados(res.data.trip.approved)
        }).catch((error) => {
            console.log(error.response)
        })
    }

console.log(infoCandidato)

    const decideCandidate = (decide, candidateId) => {
        const body = {
            approve: decide
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Soraia/trips/${id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token
            }
        }).then((res) => {
            setAprovados(res.data.trip.approved)
            alert("Decisão registrada com sucesso 😀")

        }).catch((error) => {
            alert( "Desculpe, tivemos um imprevisto, tente mais tarde!", error.response)
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
                <br />
                <hr />
            </div>
        )
    })

    const mapAprovados = aprovados.map((aprov) => {
        return (
            <div key={aprov.id}  >

                <li> {aprov.name}</li>
                <br />
                <hr />
            </div>
        )
    })
    return (
        <Container>
            <h1>{informacao.name}</h1>
            <br />
            <br />
            <br />
            <div>
                <p><b>Descrição:</b> {informacao.description}</p>
                <p><b>Planeta:</b> {informacao.planet}</p>
                <p><b>Duração:</b> {informacao.durationInDays}</p>
                <p><b>Data:</b> {informacao.date}</p>
            </div>
            <button onClick={voltarPagAdm}>Voltar</button>

            <h2>Candidatos Pendentes</h2>
            {mapTrisp}

            <h2>Candidatos Aprovados</h2>
            {mapAprovados}

        </Container>
    )
}

export default TripDetailsPage;