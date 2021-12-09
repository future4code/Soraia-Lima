// ----------------- CRIAR UMA NOVA VIAGEM-----------

import { Container, Inscrever } from '../styles'
import { useHistory } from "react-router-dom";
import useProtectedPage from '../hooks/useProtectedPage';
import useForm from '../hooks/useForm';
import axios from 'axios';

function CreateTripPage() {
    useProtectedPage()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const history = useHistory()
    const voltarPainelAdm = () => {
        history.push("/admin-trips-list")
    }

    const createTrip = (event) => {

        const token = localStorage.getItem("token")

        event.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/soraia-aparecida-carver/trips', form,
            {
                headers: {
                    auth: token
                }
            }).then((res) => {
                console.log("Viagem cadastrada com sucesso", res.data)
                cleanFields()
            }).catch((error) => {
                console.log("Aconteceu algo errado, por gentileza tenta mais tarde", error.response)
            })
    }

    return (

        <Container>
            <Inscrever>
                <h1> Criar Viagem </h1>
                <form onSubmit={createTrip}>
                    <input
                        placeholder={"Nome"}
                        value={form.name}
                        onChange={onChange}
                        required
                        name={"name"}
                        pattern={"^.{5,}"}
                        title={"O nome deve ter no mínimo 5 letras"} />

                    <select value={form.planet}
                        onChange={onChange}
                        name={"planet"}
                        required>
                        <option value disabled selected>Escolha um planeta</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                    </select>

                    <input
                        type="date"
                        value={form.date}
                        onChange={onChange}
                        required
                        name={"date"}
                    />
                    <input
                        placeholder={"Descrição"}
                        value={form.description}
                        onChange={onChange}
                        required
                        name={"description"}
                        pattern={"^.{30,}"}
                        title={"A descrição deve ter no mínimo 30 leras"} />
                    <input
                        placeholder={"Duração em dias"}
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                        name={"durationInDays"}
                        type={"number"}
                        min={50} />

                    <div>
                        <button onClick={voltarPainelAdm}>Voltar</button>
                        <button>Criar</button>
                    </div>

                </form>



            </Inscrever>
        </Container>
    )
}
export default CreateTripPage;