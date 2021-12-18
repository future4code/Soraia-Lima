import React from "react"
import error from "../../image/error.jpg"
import Headers2 from "../../components/Headers2/Headers2"
import { Container } from "./styled"


function ErrorPage() {
    return (
        <div>
            <Headers2 />
            <Container>
                <img src={error} alt={"Página não encontrada - 404"} />
            </Container>
        </div>
    )
}
export default ErrorPage