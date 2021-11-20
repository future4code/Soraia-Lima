import React from "react";
import axios from "axios";

class DetalhesInput extends React.Component {
    state = {
        musica: [],
        name: "",
        artist: "",
        url: "",
    }
    // ------------------FUNÇÕES DOS INPUT DE CADASTRAR NOVA MUSICA ---------------------

    nomeMusica = (event) => {
        this.setState({ name: event.target.value })
    }
    artistaMusica = (event) => {
        this.setState({ artist: event.target.value })
    }
    urlMusica = (event) => {
        this.setState({ url: event.target.value })
    }

    // -----------------------ADICIONAR MUSICA EM UMA PLAYLIST----------------------

    adicionarMusica = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(url, body, {
            headers: {
                Authorization: "soraia-aparecida-carver"
            }
        }).then((resposta) => {
            console.log(resposta.data)
            this.setState({ nam: "", artist: "", url: "" })
        }).catch((erro) => {
            console.log(erro.response.data)
        })

    }
    render() {
        return (
            <div>
                 <div>
          <h2>Adicionar novas musicas </h2>
          <input
            placeholder={"Nome da música"}
            value={this.state.name}
            onChange={this.nomeMusica}
          />

          <input
            placeholder={"url da música"}
            value={this.state.url}
            onChange={this.urlMusica}
          />

          <input
            placeholder={"Cantor"}
            value={this.state.artist}
            onChange={this.artistaMusica}
          />
          <button onClick= { this.adicionarMusica}>Adicionar</button>
        </div> 
            </div>
        )
    }
}
export default DetalhesInput