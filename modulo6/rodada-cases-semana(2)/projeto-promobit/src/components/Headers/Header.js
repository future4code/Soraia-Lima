import { useNavigate } from "react-router-dom"
import { goToHome } from "../../router/coodinator"
import { Container } from "./styled"

const Header = () => {
    const navigate = useNavigate()
    
    return (
        <Container>
            <header>
                <h2 onClick={() =>goToHome(navigate)}>LabeVideo <span>🎞️</span></h2>
            </header>
        </Container>
    )
}

export default Header