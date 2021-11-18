import React from "react";
import axios from "axios";

class PagLista extends React.Component {
  state = {
    playlists: []
  }
  componentDidMount() {
    this.verplaylist()
  }

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
        console.log(erro.response.data)
        alert("Ahn que pena, aconteceu algum erro, por favor, tente mais tarde :(")
      })

  }

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
        console.log(erro.response.data)
        console.log(erro.response.status)
        alert("Ahh, aconteceu algum erro, não conseguimos exluir a playlist, por favor tente novamente :(")
      })
  }


  render() {
    console.log("estado", this.state.playlists)
    const lista = this.state.playlists.map((item) =>
      
        <div key={item.id}>
          {item.name} 
          <button value={item.id} onClick = {this.deletarPlaylist}>x</button>
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
        </div>
      </div>
    );
  }
}

export default PagLista;