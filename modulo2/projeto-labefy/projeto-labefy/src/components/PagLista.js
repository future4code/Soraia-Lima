import React from "react";
import axios from "axios";

class PagLista extends React.Component {
  state = {
    playlists: [],
    musica: [],
    name: "",
    artist: "",
    url: "",
    addmusica: false,
    id: "",
  }


  //----------------------RENDERIZAÇÃO AUTOMATICA NA TELA--------------

  componentDidMount() {
    this.verplaylist()
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

  // ------------------HABILITAR BOTÃO DE ADICIONAR MUSICA----
  addmusicas = () => {
    if (this.state.addmusica === false) {
      return this.setState({ addmusica: true })
    } else {
      return this.setState({ addmusica: false })
    }
  }

  // -----------------MOSTRAR INPUT ---------------
  InputAddmusica = () => {
    if (this.state.addmusica === true) {
      return (
        <div>
          <input placeholder={"Nome da música"} value={this.state.name} onChange={this.nomeMusica} />
          <input placeholder={"url da música"} value={this.state.url} onChange={this.urlMusica} />
          <input placeholder={"Cantor"} value={this.state.artist} onChange={this.artistaMusica} />
          <button onClick={() => { this.adicionarMusica() }}>Adicionar</button>

        </div>
      )

    } else {
      return ""
    }
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

  deletarPlaylist = (id) => {
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
  
    

  verDetalhesPlaylist = (id) => {
    
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url, {
      headers: {
        Authorization: "soraia-aparecida-carver"
      }
    }).then((resposta) => {
      console.log("resposta", resposta)
      console.log("Detalhes playlist", resposta.data.result.tracks)
      this.setState({ musica: resposta.data.result.tracks })
      this.setState({id:id})
    }).catch((erro) => {
      // console.log(erro.response.data)
      console.log(erro.response.status)
    })

  }



  //-----------------------ADICIONAR MUSICA EM UMA PLAYLIST----------------------

  adicionarMusica = () => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks`
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
      this.setState({ name: "", artist: "", url: "" })
      alert("Musica adicionada com sucesso")
      this. verDetalhesPlaylist(this.state.id)
      
    }).catch((erro) => {
      console.log(erro.response.data)
      alert("Aconteceu um erro, por favor, verifique todos os campos e tente novamente.")
    })

  }

  // -------------------------DELETAR MUSICA DE UMA PLAYLIST-------------
  deletarMusica = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "soraia-aparecida-carver"
      }
    }).then(()=>{
      alert("Musica deletada")
      this. verDetalhesPlaylist(this.state.id)
    }).catch((erro)=>{
      console.log(erro.response.status)
      alert("A música não podê ser deletada, tente novamente.")
    })
  }

  render() {
    // ------------------------MAP PLAYLIST -----------------
    console.log("estado", this.state.playlists)
    console.log("musicas", this.state.musica)

    const lista = this.state.playlists.map((item) =>
      <div key={item.id}>
        {item.name}
        <button onClick={() =>{this.deletarPlaylist(item.id)}}>x</button>
        <button onClick={() =>{this.verDetalhesPlaylist(item.id)}}>Detalhes</button>
        <button onClick={this.addmusicas}>Add musica</button>
        {/* <button>Adicionar musica</button> */}

      </div>
    )

    // ---------------------- MAP RENDERIZA MUSICAS DA PLAYLIST ------------
    const musicas = this.state.musica.length >0 ? this.state.musica.map((musica) =>{
      return (
        <div key={musica.id}>
        <br />
        Musica:{musica.name}
        <br />
        Cantor:{musica.artist}				
        <br/>
        {/* ----------------REPRODUÇÃO DO AUDIO---------- */}
        <audio ref="audio" src={musica.url} controls/> 
        <button onClick={()=>{this.deletarMusica(musica.id)}}>Deletar musica</button>
      </div>
      )
    }): "Sem músicas disponíveis para visuzliação. Adicione uma nova música a sua playlist"

    return (

      <div>
        <div>

          <h1>Playlists disponivés!!</h1>
          {/* <button onClick={this.props.irParaCadastro}>Ir para pagina de cadastro</button> */}

          <ul>
            {lista}
          </ul>
        </div>

        <div>
          {musicas}
        </div>

        <div>
          {this.InputAddmusica()}
        </div>

      </div>
    );
  }
}

export default PagLista;