// import React from "react";
// import axios from "axios";
// import PagLista from "./PagLista";

// class DetalhesInput extends React.Component {
//     state = {
//         musica: [],
//         name: "",
//         artist: "",
//         url: "",
//     }

//     // ----------------------------------VISUALIZAR DETALHES DA PLAYLIST--------------------

//     verDetalhesPlaylist = (event) => {

//         const id = event.target.value
//         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
//         axios.get(url, {
//             headers: {
//                 Authorization: "soraia-aparecida-carver"
//             }
//         }).then((resposta) => {
//             console.log("resposta", resposta)
//             console.log("Detalhes playlist", resposta.data.result.tracks)
//             this.setState({ musica: resposta.data.result.tracks })
//         }).catch((erro) => {
//             // console.log(erro.response.data)
//             console.log(erro.response.status)
//         })

//     }
//     // ------------------FUNÇÕES DOS INPUT DE CADASTRAR NOVA MUSICA ---------------------

//     // nomeMusica = (event) => {
//     //     this.setState({ name: event.target.value })
//     // }
//     // artistaMusica = (event) => {
//     //     this.setState({ artist: event.target.value })
//     // }
//     // urlMusica = (event) => {
//     //     this.setState({ url: event.target.value })
//     // }

//     // -----------------------ADICIONAR MUSICA EM UMA PLAYLIST----------------------

//     // adicionarMusica = (id) => {

//     //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
//     //     const body = {
//     //         name: this.state.name,
//     //         artist: this.state.artist,
//     //         url: this.state.url
//     //     }

//     //     axios.post(url, body, {
//     //         headers: {
//     //             Authorization: "soraia-aparecida-carver"
//     //         }
//     //     }).then((resposta) => {
//     //         console.log(resposta.data)
//     //         this.setState({ nam: "", artist: "", url: "" })
//     //     }).catch((erro) => {
//     //         console.log(erro.response.data)
//     //     })

//     // }
//     render() {

//          {/* ---------------------- MAP RENDERIZA MUSICAS DA PLAYLIST ------------ */}
//          const musicas = this.state.musica.map((musica) =>
//          <div key={musica.id}>
//              {/* <h2>Detalhes da Playlist</h2> */}

//              <br />
//              Musica:{musica.name}
//              <br />
//              Cantor:{musica.artist}

//          </div>
//          )

//         return (

//             <div>
//                 {musicas}
//                 {/* <div>
//                     <h2>Adicionar novas musicas </h2>
//                     <input
//                         placeholder={"Nome da música"}
//                         value={this.state.name}
//                         onChange={this.nomeMusica}
//                     />

//                     <input
//                         placeholder={"url da música"}
//                         value={this.state.url}
//                         onChange={this.urlMusica}
//                     />

//                     <input
//                         placeholder={"Cantor"}
//                         value={this.state.artist}
//                         onChange={this.artistaMusica}
//                     />
//                     <button onClick={this.adicionarMusica}>Adicionar</button>

//                     <PagLista
//                     verDetalhesPlaylist={this.verDetalhesPlaylist}
//                     />
//                 </div> */}
//                 <PagLista 
//                 verDetalhesPlaylist={this.verDetalhesPlaylist}/>

               
//             </div>
//         )
//     }
// }
// export default DetalhesInput