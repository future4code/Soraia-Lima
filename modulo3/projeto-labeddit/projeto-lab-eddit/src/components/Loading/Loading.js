import ClockLoader from "react-spinners/ClockLoader";
import styled from "styled-components";

const Container = styled.div`  
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 20%;
`

function Loading() {
    return (
        <Container>
            <ClockLoader
                color="#ff8210"
                size={60}
            />
        </Container>
    )
}

export default Loading; 