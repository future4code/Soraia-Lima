import React from "react";
import axios from "axios";
import DetalhesInput from "./DetalhesInput";

class PagLista extends React.Component {
  state = {
    playlists: [],
    musica: [],
    name: "",
    artist: "",
    url: "",
    // idMusica: ""
  }

  //----------------------RENDERIZAÇÃO AUTOMATICA NA TELA--------------

  componentDidMount() {
    this.verplaylist()
  }

  //---------------------- VER AS PLAYLIST --------------------------

  verplaylist = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "soraia-aparecida-carver"
      }
    }).then((resposta) => {
      // console.log("certo", resposta.data.result.list) Importante, colocar o caminho exato at´onde está o array. 
      this.setState({ playlists: resposta.data.result.list })
    })
      .catch((erro) => {
        // console.log(erro.response.data)
        alert("Ahn que pena, aconteceu algum erro, por favor, tente mais tarde :(")
      })

  }

  // ----------------------------------DELETAR PLAYLIST----------------------

  deletarPlaylist = (event) => {
    const id = event.target.value
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url,
      {
        headers: {
          Authorization: "soraia-aparecida-carver"
        }
      }).then(() => {
        alert("Playlist deletada com sucesso.")
        this.verplaylist()
      }).catch((erro) => {
        // console.log(erro.response.data)
        // console.log(erro.response.status)
        alert("Ahh, aconteceu algum erro, não conseguimos exluir a playlist, por favor tente novamente :(")
      })
  }

  // ----------------------------------VISUALIZAR DETALHES DA PLAYLIST--------------------

  verDetalhesPlaylist = (event) => {

    const id = event.target.value
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url, {
      headers: {
        Authorization: "soraia-aparecida-carver"
      }
    }).then((resposta) => {
      console.log("resposta", resposta)
      console.log("Detalhes playlist", resposta.data.result.tracks)
      this.setState({ musica: resposta.data.result.tracks })
    }).catch((erro) => {
      // console.log(erro.response.data)
      console.log(erro.response.status)
    })

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

  //-----------------------ADICIONAR MUSICA EM UMA PLAYLIST----------------------

  // adicionarMusica = (id) => {
  
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
  //   const body = {
  //     name: this.state.name,
  //     artist: this.state.artist,
  //     url: this.state.url
  //   }

  //   axios.post(url, body, {
  //     headers: {
  //       Authorization: "soraia-aparecida-carver"
  //     }
  //   }).then((resposta) => {
  //     console.log(resposta.data)
  //     this.setState({nam:"", artist:"", url:""})
  //   }).catch((erro) => {
  //     console.log(erro.response.data)
  //   })

  // }



  render() {
    // ------------------------MAP PLAYLIST -----------------
    console.log("estado", this.state.playlists)
    console.log("musicas", this.state.musica)

    const lista = this.state.playlists.map((item) =>
      <div key={item.id}>
        {item.name}
        <button value={item.id} onClick={this.deletarPlaylist}>x</button> 
        <button value={item.id} onClick={this.verDetalhesPlaylist}>Detalhes</button>
        {/* <button>Adicionar musica</button> */}
      
      </div>
    )

    // ---------------------- MAP RENDERIZA MUSICAS DA PLAYLIST ------------
    const musicas = this.state.musica.map((musica) =>
      <div key={musica.id}>
        <h2>Detalhes da Playlist</h2>
        
         Musica:{musica.name}
         Cantor:{musica.artist}
  
      </div>
    )

    return (

      <div>
        <div>

          <h1>Playlists disponivés!!</h1>
          {/* <button onClick={this.props.irParaCadastro}>Ir para pagina de cadastro</button> */}
          <ul>
            {lista}
          </ul>
          <br />

            {musicas}

            <DetalhesInput/>
        </div>

      </div>
    );
  }
}

export default PagLista;