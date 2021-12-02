import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 400px;
height: 600px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 5px;
overflow: auto; // colocar barra de rolagem, quando o map ultrapassar o tamanho da página
button{
    cursor:pointer;
}`

const Header = styled.div`
display: flex;
margin-top:2%;
margin-bottom:2%;
align-items: center;

h1{
    margin-left:19%;
}

button{
    width:50px;
    height:30px;
}
`
const Matchs = styled.div`
display: flex;
flex-direction: row;
margin-bottom:1vh;
align-items: center;
margin-top:3%;

img{
    width: 64px;
    height: 55px;
    border-radius: 50%;
    margin-left:1vw;
    
}

p{
    margin-left:1vw;
    font-size:19px;
}`

function TelaMatch(props) {

    const [listaDeMatch, setListaDeMatch] = useState([])

    // -------------- RENDERIZAÇÃO -----------------
    useEffect(() => {
        getMatches()
    }, [])

    // -------------------VER QUEM DEU MATCH ----------------
    const getMatches = () => {

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/matches').then((res) => {
            // const novaLista = [...listaDeMatch, res.data.matches]
            setListaDeMatch(res.data.matches)

        }).catch((error) => {
            alert('Ah que pena, aconteceu algo errado, por favor, tente mais tarde :(', error.response)
        })
    }

    const mapLista = listaDeMatch.map((item) => {
        return <Matchs key={item.id}>
            <img src={item.photo} alt={item.name} /> <p>{item.name}</p>
        </Matchs>
    })

    return (
        <Container>
            <Header>
                <button onClick={props.irParaInicio} >Voltar</button><h1>astromatch</h1>
            </Header>
            <hr />
            <div>
                {listaDeMatch.length > 0 ?  <div>{mapLista}</div> : <p>sem nada :(</p> }
            </div>
        </Container>
    )
}

export default TelaMatch;