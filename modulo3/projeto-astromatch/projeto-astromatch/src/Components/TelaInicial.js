import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Header = styled.header`
display: flex;
justify-content: space-between;
margin-top:2%;
margin-bottom:2%;
align-items: center;

h1{
    margin-left:30%;
}

button{
    width:50px;
    height:30px;
}
`

const Container = styled.div`
min-width: 400px;
height: 600px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 5px;

img{
    width: 365px;
    height:450px;
    margin-top: 10px;
    box-shadow: rgb(205 205 205 / 90%) 5px 5px 10px 5px;
    border-radius:5px;
    box-sizing: rgb(255 255 255 / 90%) 50px 50px 50px 50px;
}

div{
    text-align:center;
}
button{
    cursor:pointer;
}
`
const Infomacoes = styled.div`
div{
    display:flex;
    flex-direction:column;
    position:fixed;
    margin-top:-80px;
    color: white;
    width:85%;
    margin-left:2vw;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
}
`

const BotaoCoracao = styled.button`
border-radius: 50%;
width: 80px;
height: 80px;
border: 1px solid green;
color: green;
font-size: 50px;
transform: scale(0.7); // adpatar o tamanho o ♥ no botão
transition: all 0.3s ease 0s; // para deixar a transição do botão mais sutil
position: relative;
&:hover{
    background-color: green;
    color: white;
}
`

const BotaoX = styled.button`
border-radius: 50%;
width: 80px;
height: 80px;
border: 1px solid red;
color: red;
font-size: 50px;
transform: scale(0.7);
transition: all 0.2s ease 0s;
position: relative;
&:hover{
    background-color: red;
    color: white;
}
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
            console.log("certo", res.data.profile)
            setPessoa(res.data.profile || "Carregando...")
        }).catch((error) => { console.log("error", error.response) })
    }

//--------------------- DAR MATCH ------------------

    const choosePerson = (oii) => {
        const bady = {
            id: pessoa.id,
            choice: oii
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/choose-person', bady).then((res) => {
            console.log("match ok", res.data)
            getProfileToChoose()
        }).catch((error) => {
            console.log(error.response)
        })
    }

    // const choosePerson2 = () =>{
    //     const bady ={
    //         id: pessoa.id,
    //         choice: false
    //     }
    //     axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia-lima/choose-person', bady).then((res)=>{
    //         console.log(" não match ",res.data)
    //         getProfileToChoose()
    //     }).catch((error)=>{
    //         console.log(error.response)
    //     })
    // }



    return (
        <Container>
            <Header>
                <h1>astromatch</h1> <button onClick={props.irParaMatch}>Match</button>
            </Header>
            <hr />
            <Infomacoes>
                <img src={pessoa.photo} alt={pessoa.name} />
                <div>
                    <h2>{`${pessoa.name}, ${pessoa.age}`}</h2>
                    <p>{pessoa.bio}</p>
                </div>
            </Infomacoes>
            <div>
                <BotaoX onClick={() => { choosePerson(false) }}>X</BotaoX>
                <BotaoCoracao onClick={() => { choosePerson(true) }}>♥</BotaoCoracao>
            </div>

        </Container>
    )
}

export default TelaInicial;