import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'Soraia',
        fotoUsuario: 'https://picsum.photos/id/100/50/50',
        fotoPost: 'https://picsum.photos/id/10/200/150'
      },

      {
        nomeUsuario: 'Douglas',
        fotoUsuario: 'https://picsum.photos/id/99/50/50',
        fotoPost: 'https://picsum.photos/id/7/200/150'
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario:"",
    valorInputFotoPost:"",
  }

  adicionaPost = () =>{
    const novoPost = {

      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    }
    const novosPosts = [...this.state.posts, novoPost];

    this.setState({posts: novosPosts})
    this.setState({
      valorInputNomeUsuario: "",
      valorInputFotoUsuario:"",
      valorInputFotoPost:""})
  }

  onChangeInputNome = (event) =>{

     this.setState({valorInputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) =>{
    this.setState({valorInputFotoUsuario: event.target.value})
  }
  
  onChangeInputFotoPost = (event) =>{
    this.setState({valorInputFotoPost: event.target.value})
  }


  render() {

    const listaDePost = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario= {post.nomeUsuario} 
          fotoUsuario={post.fotoUsuario} 
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        {listaDePost}

        <input
          value= {this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNome}
          placeholder = {"Nome"}
        />
        <input
          value= {this.state.valorInputFotoUsuario}
          onChange = {this.onChangeInputFotoUsuario}
          placeholder = {"Foto do Usuário"}
        />
        <input
          value = {this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder = {"Foto do Post"}
        />
        <button onClick = {this.adicionaPost}>CRIAR NOVO POST</button>
      </MainContainer>
    );
  }
}

export default App;
