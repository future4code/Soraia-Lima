
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
button{
    cursor:pointer;
}`

const Header = styled.div`
display: flex;
/* justify-content: space-between; */
margin-top:2%;
margin-bottom:2%;

p{
    font-size: 25px;
    margin-left:25%;
}

button{
    width:50px;
    height:30px;
}
`

function TelaMatch (props) {
    return (
        <Container>
            <Header>
            <button onClick={props.irParaInicio} >Voltar</button><p>astromatch</p>
            </Header>
            <hr />
        </Container>
    )
}

export default TelaMatch;