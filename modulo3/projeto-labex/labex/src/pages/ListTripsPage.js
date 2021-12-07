import {Container} from '../styles'
import {useHistory} from 'react-router-dom'

function ListTripsPage () {

    const history = useHistory()

    const paginaVoltarHome = () => {
        history.goBack()
    }

    const paginaIncreverSe = () => {
        history.push("/trips-application")
    }

    return(
        <Container>
            <div>
            <button onClick={paginaVoltarHome}>Voltar</button>
            <button onClick={paginaIncreverSe}>Inscrever-se</button>
            <h1>Lista de Viagens</h1>
            <div>
                <p>Nome: Soraia</p>
                <p>Descrição: OIiiiiiiiiiiiiiiiiiiiiiii</p>
                <p>Planeta: Marteeeeeee</p>
                <p>Duração: 366</p>
                <p>Data: 07/12/2021</p>
            </div>
            </div>
        </Container>
    )
}
export default ListTripsPage;