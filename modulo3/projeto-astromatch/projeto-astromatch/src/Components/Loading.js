import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

const Container = styled.div`  
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 50%;
`

function Loading() {
    return (
        <Container>
            <RingLoader
                color="#993399"
                size={60}
            />
        </Container>
    )
}

export default Loading;