import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";

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
    color: purple;
    font-size:37px;
}

`
const VoltarHome = styled.img`
    width:32px;
    height:30px;
    background-color: white;
    margin-left: 5px;
    cursor:pointer;`

const PrimeiraPalavra = styled.span`
color: teal;`

const SegundaPalavra = styled.span`
color: purple;`

const Matchs = styled.div`
display: flex;
flex-direction: row;
margin-bottom:1vh;
align-items: center;
margin-top:3%;

img{
    width: 60px;
    height: 58px;
    border-radius: 50%;
    margin-left:0.7vw;
}

p{
    margin-left:1vw;
    font-size:19px;
}`

const Recarregar = styled.img`
width:40px;
height:35px;
margin-left:63px;
cursor:pointer;
`

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
                <VoltarHome src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkLvzSK9DWD-GXdcl0-Ukej2N0GGDl-QIfOn6-zQFg-GEiEWHFg7w1vHrTquMpZBiRxE&usqp=CAU" alt="Voltar para home" onClick={props.irParaInicio}/><h1><PrimeiraPalavra>astro</PrimeiraPalavra><SegundaPalavra>match</SegundaPalavra></h1> <Recarregar src="https://cdn-icons-png.flaticon.com/512/1998/1998534.png" alt="Recarregar..." onClick={props.clear} />
            </Header>
            <hr />
            <div>
                {listaDeMatch.length > 0 ? <div>{mapLista}</div> : <h4>Você ainda não possui nenhum match 😢 </h4>}
            </div>
        </Container>
    )
}

export default TelaMatch;