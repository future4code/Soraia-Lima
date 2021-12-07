import{Container, PainelAdm, InfoViagem} from '../styles'
import { useHistory } from "react-router-dom";

function AdminHomePage () {

    const history = useHistory()

    const voltarHome = () => {
        history.goBack()
    }

    const paginaCriarViagem = () => {
        history.push("/admin-trips-create")
    }

    const detalhes =() =>{
        history.push("/admin/trips/:id")
    }

    return (
        <Container>
        <PainelAdm>
            <h1>Painel Administrativo</h1>
            <div>
            <button onClick={voltarHome}>Voltar</button>
            <button onClick={paginaCriarViagem}>Criar viagem</button>
            <button>Logout</button>
            </div>

            <InfoViagem>
                <p onClick={detalhes}> Viagem 1</p> <button>del</button>
            </InfoViagem>
   
        </PainelAdm>
        </Container>
    )
}

export default AdminHomePage;