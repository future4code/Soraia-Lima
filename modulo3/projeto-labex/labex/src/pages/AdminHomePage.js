// -----------------PAGINA ADM -----------
import { Container, PainelAdm, InfoViagem } from '../styles'
import { useHistory } from "react-router-dom";
import { useResquestData } from '../hooks/useResquestData';
import useProtectedPage from '../hooks/useProtectedPage';
import axios from 'axios';
import {useEffect} from 'react'


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

   
    //---------------- DELETELAR UMA VIAGEM -----------------

    const deleteTrip = (id) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Soraia/trips/${id}`,{ headers: {
            auth: token
        }        
    }).then((res)=>{
        console.log("DELETADO COM SUCESSO" ,res.data)
       
    }).catch((error)=>{
        console.log("NÃO DELETADO" ,error.response)
    })
    }

    const pergunta = (id)=>{    
        if( window.confirm("Tem certeza que deseja excluir essa viagem?")){
            deleteTrip(id)
        }
    } 

    //-----------------------------------------------------------
    const mapTrisp = trips.map((trip) => {
        return (
            <InfoViagem key={trip.id}  >
                <p onClick={()=>{ history.push(`/admin/trips/${trip.id}`)}}>{trip.name}</p> <button onClick={() =>{pergunta(trip.id)}} >deletar</button>

            </InfoViagem>
        )
    })

    const clear = () => {
        localStorage.clear()
        history.push("/login")
    }

//   useEffect(()=>{
//        useResquestData()
//   },[])
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