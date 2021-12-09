// -----------------PAGINA ADM -----------
import { Container, PainelAdm, InfoViagem } from '../styles'
import { useHistory } from "react-router-dom";
import { useResquestData } from '../hooks/useResquestData';
import useProtectedPage from '../hooks/useProtectedPage';
import axios from 'axios';

function AdminHomePage() {
    useProtectedPage()

    const history = useHistory()
    const trips = useResquestData()

    // --------------------------TROCA DE PÁGINA----------------
    const token = localStorage.getItem("token")

    const backToStart = () => {
        if (token === null) {
            history.push("/login")
        } else {
            history.push("/")
        }
    }

    const createNewTrip = () => {
        history.push("/admin-trips-create")
    }

    //---------------------VER DETALHES DE UMA VIAGEM------------
    const getTripDetail = (id) =>{
        console.log(id)
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/soraia-aparecida-carver/trip/${id}`, { headers: {
            auth: token
        }        
    }).then((res)=>{
        console.log(res.data)
        history.push(`/admin/trips/${id}`)
    }).catch((error)=>{
        console.log(error.response)
    })
    }
    //---------------- DELETELAR UMA VIAGEM -----------------

    const deleteTrip = (id) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/soraia-aparecida-carver/trips/${id}`,{ headers: {
            auth: token
        }        
    }).then((res)=>{
        console.log("DELETADO COM SUCESSO" ,res.data)
        history.push("/admin-trips-list")
    }).catch((error)=>{
        console.log("NÃO DELETADO" ,error.response.mensagen)
    })
    }

    //()=>{deleteTrip(trip.id)}

    // const pergunta = ()=>{
    
        
    //     if( confirm("Tem certeza que deseja excluir essa viagem?")){
    //         console.log("deletado")
    //     }

    // } 

    //-----------------------------------------------------------
    const mapTrisp = trips.map((trip) => {
        return (
            <InfoViagem key={trip.id}  >
                <p onClick={()=>{getTripDetail(trip.id)}}>{trip.name}</p> <button onClick={() =>{deleteTrip(trip.id)}}>deletar</button>

            </InfoViagem>
        )
    })

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
                {mapTrisp}
            </PainelAdm>
        </Container>
    )
}

export default AdminHomePage;