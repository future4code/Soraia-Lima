import{Container, Inscrever} from '../styles'
import { useHistory } from "react-router-dom";

function CreateTripPage () {

    const history = useHistory()

    const voltarPainelAdm = () => {
        history.goBack()
    }

    return (
        <Container>
        <Inscrever>
            <h1> Criar Viagem </h1>
            <form>
            <input 
                placeholder={"Name"}
                value={""}
                onChange={""}/>

            <select>
                <option value disabled selected>Escolha um planeta</option>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
            </select>

            <input
               type="date"
                value={""}
                onChange={""}/>
            <input
                placeholder={"Descrição"}
                value={""}
                onChange={""}/>
            <input
                placeholder={"Duração em dias"}
                value={""}
                onChange={""}/>

            </form>

            <div>
                <button onClick={voltarPainelAdm}>Voltar</button>
                <button>Criar</button>
            </div>

        </Inscrever>
        </Container>
    )
}
export default CreateTripPage;