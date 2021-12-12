import { Container, PainelAdm, InfoViagem, Footer2 } from '../styles'
import { useHistory } from "react-router-dom";
import useProtectedPage from '../hooks/useProtectedPage';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL, ALUNO } from '../components/info';
import Loading from '../components/Loading';

function AdminHomePage() {

    useProtectedPage()
    const [trips, settrips] = useState([])
    const history = useHistory()
    const token = localStorage.getItem("token")

    // --------------------------TROCA DE PÁGINA----------------
    const backToStart = () => {
        history.push("/")
    }
    const createNewTrip = () => {
        history.push("/admin-trips-create")
    }

    useEffect(() => {
        getTrips()
    }, [trips])

    //------------- REQUISIÇÃO DE VIAGENS------------
    const getTrips = () => {
        axios.get(`${BASE_URL}${ALUNO}/trips`).then((res) => {
            settrips(res.data.trips)
        }).catch((error) => {
            alert("Ah que pena, aconteceu um erro, por gentileza, tente mais tarde", error.response)
        })
    }

    //---------------- DELETELAR UMA VIAGEM -----------------
    const deleteTrip = (id) => {
        axios.delete(`${BASE_URL}${ALUNO}/trips/${id}`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            console.log("DELETADO COM SUCESSO", res.data)

        }).catch((error) => {
            console.log("NÃO DELETADO", error.response)
        })
    }

    const question = (id) => {
        if (window.confirm("Tem certeza que deseja excluir essa viagem?")) {
            deleteTrip(id)
        }
    }

    const mapTrisp = trips.map((trip) => {
        return (
            <InfoViagem key={trip.id}  >
                <p onClick={() => { history.push(`/admin/trips/${trip.id}`) }}>{trip.name}</p> <div onClick={() => { question(trip.id) }} ><img src="https://st.depositphotos.com/1041273/3860/v/600/depositphotos_38606631-stock-illustration-trash-bin-icon.jpg" alt="lixeira" /></div>
            </InfoViagem>
        )
    })

    //--------- LOGOUT ---------
    const clear = () => {
        localStorage.clear()
        history.push("/login")
    }

    return (
        <Container>
            <PainelAdm>
                <h1>Painel Administrativo</h1>
                <div>
                    <button onClick={backToStart}>Voltar</button>
                    <button onClick={createNewTrip}>Criar viagem</button>
                    <button onClick={clear}>Logout</button>
                </div>
                {mapTrisp.length > 0 ? <div>{mapTrisp}
                    <Footer2>
                        <p>LabeX © 2021</p>
                        <div>
                            <a href="https://www.facebook.com/" target="blank"><img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/%C3%8Dcone-Facebook-PNG.png" /></a>
                            <a href="https://www.instagram.com/" target="blank"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" /></a>
                            <a href="https://twitter.com/" target="blank"><img src="https://image.flaticon.com/icons/png/512/8/8800.png" /></a>
                        </div>
                    </Footer2>
                </div> : <Loading />}
            </PainelAdm>
        </Container>
    )
}

export default AdminHomePage;