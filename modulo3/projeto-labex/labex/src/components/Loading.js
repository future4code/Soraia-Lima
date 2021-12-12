import ClockLoader from "react-spinners/ClockLoader";
import styled from "styled-components";

const Container = styled.div`  
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 10%;
`

function Loading() {
    return (
        <Container>
            <ClockLoader
                color="#274360"                
                size={80}
            />
        </Container>
    )
}

export default Loading; 