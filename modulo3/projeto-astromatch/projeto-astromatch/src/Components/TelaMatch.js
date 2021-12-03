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
}
@media screen and  (max-device-width : 667px) {
    height: 95%;
    width: 95%;
    text-align: center;
}
`

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

@media screen and  (max-device-width : 667px) {
h1{
    margin-left:17%;
    font-size:30px;}
}`

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
}

@media screen and  (max-device-width : 667px) {
img{
    margin-left:2vw;
    margin-right:1vw;
    width: 50px;
    height: 48px;
}
p{
    font-size:16px;
}
}`

const Recarregar = styled.img`
width:40px;
height:35px;
margin-left:63px;
cursor:pointer;
`

const H3 = styled.h3`
color: purple;
margin-top: 50%;
margin-left: 7%;
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

    // --------------- LIMPAR --------------
    const clear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/clear').then(() => {
            console.log('limpou')
            getMatches()
        }).catch((error) => {
            console.log(error.response)
        })
    }

    return (
        <Container>
            <Header>
                <VoltarHome src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkLvzSK9DWD-GXdcl0-Ukej2N0GGDl-QIfOn6-zQFg-GEiEWHFg7w1vHrTquMpZBiRxE&usqp=CAU" alt="Voltar para home" onClick={props.irParaInicio} /><h1><PrimeiraPalavra>astro</PrimeiraPalavra><SegundaPalavra>match</SegundaPalavra></h1> <Recarregar src="https://cdn-icons-png.flaticon.com/512/1998/1998534.png" alt="Recarregar..." onClick={clear} />
            </Header>
            <hr />
            <div>
                {listaDeMatch.length > 0 ? <div>{mapLista}</div> : <H3>Você ainda não possui nenhum match 😢 </H3>}
            </div>
        </Container>
    )
}

export default TelaMatch;