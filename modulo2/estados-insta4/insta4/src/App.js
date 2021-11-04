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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

          <Post
          nomeUsuario={'Soraia'}
          fotoUsuario={'https://picsum.photos/id/100/50/50'}
          fotoPost={'https://picsum.photos/id/10/200/150'}
        />

          <Post
          nomeUsuario={'Douglas'}
          fotoUsuario={'https://picsum.photos/id/99/50/50'}
          fotoPost={'https://picsum.photos/id/7/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
