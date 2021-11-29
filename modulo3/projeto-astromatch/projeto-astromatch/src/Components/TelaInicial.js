import styled from "styled-components";

const Header = styled.div`
display: flex;
justify-content: space-between;
margin-top:2%;
margin-bottom:2%;

p{
    font-size: 25px;
    margin-left:35%;
}

button{
    width:50px;
    height:30px;
}
`

const Container = styled.div`
width: 400px;
height: 600px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 5px;

img{
    width: 365px;
    height:440px;
    margin-top: 10px;
}

div{
    text-align:center;
}
button{
    cursor:pointer;
}
`

const BotaoCoracao = styled.button`
border-radius: 50%;
width: 80px;
height: 80px;
border: 1px solid green;
color: green;
font-size: 50px;
transform: scale(0.7);
transition: all 0.2s ease 0s;
position: relative;
box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
overflow: hidden;
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
box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
overflow: hidden;
&:hover{
    background-color: red;
    color: white;
}
`

function TelaInicial(props) {
    console.log("oii",props)

    const clicouBotao = () => {
        console.log("clicouuu")
    }

    const clicouBotaoX = () => {
        console.log("clicouuu XXXXX")
    }



    return (
        <Container>
            <Header>
                <p>astromatch</p> <button onClick={props.irParaMatch}>Match</button>
            </Header>
            <hr />
            <div>
                <img src="https://i1.wp.com/urbiviagens.com.br/wp-content/uploads/2019/07/Aracaju.png" alt="imagem" />
            </div>
            <div>
                <BotaoX onClick={clicouBotaoX}>x</BotaoX>
                <BotaoCoracao onClick={clicouBotao}>♥</BotaoCoracao>
            </div>
        </Container>
    )
}

export default TelaInicial;