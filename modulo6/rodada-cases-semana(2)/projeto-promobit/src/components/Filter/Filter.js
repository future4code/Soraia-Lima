import { Container, ContainerMap } from "./styled"

const Filter = () => {

    const availableFilters = [
        { id: 1, name: "Ação" },
        { id: 2, name: "Aventura" },
        { id: 3, name: "Animação" },
        { id: 4, name: "Comédia" },
        { id: 5, name: "Crime" },
        { id: 6, name: "Documentário" },
        { id: 7, name: "Drama" },
        { id: 8, name: "Família" },
        { id: 9, name: "Fantasia" },
        { id: 10, name: "História" },
        { id: 11, name: "Terror" },
        { id: 12, name: "Musica" },
        { id: 13, name: "Mistério" },
        { id: 14, name: "Romance" },
        { id: 15, name: "Ficção Científica" },
        { id: 16, name: "Cinema TV" },
        { id: 17, name: "Thiller" },
        { id: 18, name: "Guerra" },
        { id: 19, name: "Faroeste" }
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