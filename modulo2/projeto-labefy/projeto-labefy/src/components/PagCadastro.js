import React from "react";
import axios from "axios";

class PagCadastro extends React.Component {
    state = {
        nome: ""
    }

    nomePlaylist = (event) => {
        this.setState({nome: event.target.value })
    }

    criarPlaylist = () => {
        const body = {
            name: this.state.nome,
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "soraia-aparecida-carver"
            }
        }).then(() => {
            alert("Playlist cadastrada com sucesso :)")
            this.setState({ nome: "" })
        }).catch((erro) => {
            console.log(erro.data)
            alert("Ahh infelizmente não foi possível realizar o cadastro, por favor, tente novamente :(")
        })
    }
    

    render() {
        return (
            <div>
                <h1>Cadastro:</h1>
                <p>Aqui você pode criar varias playlist dahora, para escutar quando e onde quiser :)</p>

                <input
                    placeholder={'Nome da playlist'}
                    value={this.state.nome}
                    onChange={this.nomePlaylist} />
                <button onClick={this.criarPlaylist}>Casdatrar</button>

                {/* <button onClick={this.props.irParaLista}>Ir para lista de musicas</button> */}
            </div>
        );
    }
}

export default PagCadastro;