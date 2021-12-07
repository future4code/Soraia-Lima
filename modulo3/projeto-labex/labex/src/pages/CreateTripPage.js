import{Container, Inscrever} from '../styles'
import { useHistory } from "react-router-dom";
import {useState} from "react"

function CreateTripPage () {
    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [descricao, setDescricao] = useState("")
    const [duracao, setDuracao] = useState("")

    const history = useHistory()

    const voltarPainelAdm = () => {
        history.goBack()
    }

    const inputNome = (e) => {
        setNome(e.target.value)
    }
    const inputData = (e) => {
        setData(e.target.value)
    }
    const inputDescricao = (e) => {
        setDescricao(e.target.value)
    }
    const inputDuracao = (e) => {
        setDuracao(e.target.value)
    }
   
    return (
        
        <Container>
        <Inscrever>
            <h1> Criar Viagem </h1>
            <form>
            <input 
                placeholder={"Nome"}
                value={nome}
                onChange={inputNome}/>

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
               placeholder={"data"}
                value={data}
                onChange={inputData}/>
            <input
                placeholder={"Descrição"}
                value={descricao}
                onChange={inputDescricao}/>
            <input
                placeholder={"Duração em dias"}
                value={duracao}
                onChange={inputDuracao}/>

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