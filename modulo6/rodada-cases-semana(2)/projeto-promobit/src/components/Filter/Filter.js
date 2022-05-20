import { useState } from "react";
import { Container, ContainerMap } from "./styled"

const Filter = () => {

    const availableFilters = [
        { id: 28, name: "Ação" },
        { id: 12, name: "Aventura" },
        { id: 16, name: "Animação" },
        { id: 35, name: "Comédia" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentário" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Família" },
        { id: 14, name: "Fantasia" },
        { id: 36, name: "História" },
        { id: 27, name: "Terror" },
        { id: 10402, name: "Musica" },
        { id: 9846, name: "Mistério" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Ficção Científica" },
        // { id: 16, name: "Cinema TV" },
        { id: 53, name: "Thiller" },
        { id: 10752, name: "Guerra" },
        { id: 37, name: "Faroeste" }
    ]

    const mapFilter = availableFilters.map((item) => {
        return (
            <ContainerMap key={item.id}>
                <button>{item.name}</button>
            </ContainerMap>
        )
    })

    return (
        <Container>
            <div>
                <h1>Milhões de séries, filmes e pessoas para descobrir. Explore já!</h1>
                <p>FILTRE POR:</p>
            </div>

            <span>
                {mapFilter}
            </span>

        </Container>
    )
}

export default Filter