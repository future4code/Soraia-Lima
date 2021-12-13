import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";

const Header = styled.header`
display: flex;
justify-content: space-between;
margin-top:2%;
margin-bottom:2%;
align-items: center;
h1{
    font-size:37px;
}
@media screen and  (max-device-width : 667px) {
h1{
    font-size:30px;}
}`

const PrimeiraPlavra = styled.span`
color: teal;`

const SegundaPalavra = styled.span`
color: purple;`

const Container = styled.div`
width: 400px;
height: 600px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 5px;
div{
    text-align:center;
}
button{
    cursor:pointer;
}
@media screen and  (max-device-width : 667px) {
    height: 95%;
    width: 95%;
    }
`

const Infomacoes = styled.div`
div{
    display:flex;
    flex-direction:column;
    position:fixed;
    margin-top:-73px;
    color: white;
    width:85%;
    margin-left:2vw;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    border-radius:5px;
}
@media screen and  (max-device-width : 667px) {   
div{
    width: 80vw;
    margin-left: 9vw;
    }
}`

const ImgCard = styled.img`
width: 365px;
height:445px;
margin-top: 10px;
box-shadow: rgb(205 205 205 / 90%) 5px 5px 10px 5px;
border-radius:5px;
box-sizing: rgb(255 255 255 / 90%) 50px 50px 50px 50px;
@media screen and  (max-device-width : 667px) {
    height: 70vh;
width: 85vw;
margin-left:1vw;
}`

const BotaoCoracao = styled.button`
border-radius: 50%;
width: 75px;
height: 72px;
border: 1px solid green;
color: green;
font-size: 50px;
transform: scale(0.7); // adpatar o tamanho o ♥ no botão
transition: all 0.3s ease 0s; // para deixar a transição do botão mais sutil
position: relative;
&:hover{
    background-color: green;
    color: white;
}`

const BotaoX = styled.button`
border-radius: 50%;
width: 75px;
height: 72px;
border: 1px solid red;
color: red;
font-size: 50px;
transform: scale(0.7);
transition: all 0.2s ease 0s;
position: relative;
&:hover{
    background-color: red;
    color: white;
}`
const Recarregar = styled.img`
width:40px;
height:35px;
margin-left:10px;
cursor:pointer;
`
const DeuMatch = styled.img`
width:55px;
height:50px;
cursor:pointer;
`
function TelaInicial(props) {
    const [pessoa, setPessoa] = useState({})

    //---------------------- RENDERIZAÇÃO --------------------
    useEffect(() => {
        getProfileToChoose()
    }, [])

    // ----------------- VER NOVAS PESSOAS --------------------
    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/person').then((res) => {
            setPessoa(res.data.profile || {})
        }).catch((error) => { console.log("error", error.response) })
    }

    //--------------------- DAR MATCH ------------------

    const choosePerson = (oii) => {
        const bady = {
            id: pessoa.id,
            choice: oii
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/choose-person', bady).then(() => {
            getProfileToChoose()
        }).catch((error) => {
            alert(error.response)
        })
    }
    // --------------- LIMPAR --------------
    const clear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/clear').then(() => {
            getProfileToChoose()
        }).catch((error) => {
            alert(error.response)
        })
    }
    
    return (
        <Container>
            <Header>
                <Recarregar src="https://cdn-icons-png.flaticon.com/512/1998/1998534.png" alt="Recarregar..." onClick={clear} />
                <h1><PrimeiraPlavra>astro</PrimeiraPlavra><SegundaPalavra>match</SegundaPalavra></h1> <DeuMatch onClick={props.irParaMatch} src="https://media.istockphoto.com/vectors/user-group-icon-vector-line-art-outline-persons-team-silhouette-with-vector-id1069729916?k=20&m=1069729916&s=170667a&w=0&h=HG8U5zkoKNjkk_sXMPpmR6IJi0e-JffPhFxfr9YAvTM=" alt="Deu Match" />
            </Header>
            <hr />
            {pessoa.name ?
                <div>
                    <Infomacoes>
                        <ImgCard src={pessoa.photo} alt={pessoa.name} />
                        <div>
                            <h2>{`${pessoa.name}, ${pessoa.age}`}</h2>
                            <p>{pessoa.bio}</p>
                        </div>
                    </Infomacoes>
                    <div>
                        <BotaoX onClick={() => { choosePerson(false) }}>X</BotaoX>
                        <BotaoCoracao onClick={() => { choosePerson(true) }}>♥</BotaoCoracao>
                    </div>
                </div>
                :
                <Loading />}
        </Container>
    )
}
export default TelaInicial;