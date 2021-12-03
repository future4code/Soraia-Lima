import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`  
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 50%;
`

function Loading() {
    const [carregando] = useState(true)
    return (
        <Container>
            <RingLoader
                carregando={carregando}
                color="#993399"
                size={60}
            />
        </Container>
    )
}

export default Loading;