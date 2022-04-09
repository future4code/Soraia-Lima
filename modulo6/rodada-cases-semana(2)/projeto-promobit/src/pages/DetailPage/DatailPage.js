import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCreditsMovie, getDetaillMovie, getMovieTrailer, getMovieRecommendations } from "../../request/request"
import Header from '../../components/Headers/Header'
import { Conatiner, ContainerInfoMovei, ContainerDetail, ContainerCredits, ContainerVote, ContainerInfoRecommendations, ContainerInfoActor, ContainerActors, InfoActor, ContainerTrailer, ContainerRecommendations, MapRecommendations, ContainerButton } from "./styled"
import { BASE_URL_IMAGE_MOVIES, BASE_URL_TRAILER } from "../../constants/url"
import { corretDate, releaseYear } from "../../services/CorretDate"
import { corretTime } from '../../services/CorretTime'
import { goToDetail, goToBack } from "../../router/coodinator"

const DetailPage = () => {
    const pathParams = useParams()
    const id = pathParams.id
    const navigate = useNavigate()

    const [detail, setDetail] = useState([])
    const [credits, setCredits] = useState([])
    const [video, setVideo] = useState([])
    const [recommendations, setRecommendations] = useState([])

    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        getDetaillMovie(id, setDetail)
        getCreditsMovie(id, setCredits)
        getMovieTrailer(id, setVideo)
        getMovieRecommendations(id, setRecommendations)
        onTop()
    }, [id])

    const newDatil = detail && <ContainerDetail>
        <div>
            {detail.poster_path && <img alt={"cartaz do filme"} src={`${BASE_URL_IMAGE_MOVIES}${detail.poster_path}`} />}
        </div>

        <section>
            {detail.title && <h1>{detail.title}  ({releaseYear(detail.release_date)})</h1>}
            <span>
                {detail.release_date && <p> {corretDate(detail.release_date)} (BR) </p>}
                •{detail.genres && detail.genres.map((item) => {
                    return (
                        <div key={item.id}>
                            <p >{item.name}</p>
                        </div>
                    )
                })}
                -{detail.runtime && <p>{corretTime(detail.runtime)}</p>}
            </span>

            <ContainerVote>
                {detail.vote_average && <><h3>Avaliações dos usuários: </h3> <span>{detail.vote_average}</span></>}
            </ContainerVote>

            <h3>Sinopse:</h3>
            {detail.overview && <p>{detail.overview}</p>}

            <ContainerCredits>
                {credits.crew && credits.crew.slice(0, 5).map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p>{item.job}</p>
                        </div>
                    )
                })}
            </ContainerCredits>

        </section>
    </ContainerDetail>

    const newActors = credits.cast && <ContainerActors>
        {credits.cast && credits.cast.map((item) => {
            return (
                <InfoActor key={item.id}>
                    <img alt="foto do ator" src={`${BASE_URL_IMAGE_MOVIES}${item.profile_path}`} />
                    <h4>{item.name}</h4>
                    <p>{item.character}</p>
                </InfoActor>
            )
        })}
    </ContainerActors>

    const newTrailer = video && <div>
        {video && video.slice(0, 1).map((item) => {
            return (
                <div key={item.id}>
                    <iframe src={`${BASE_URL_TRAILER}/${item.key}`} />
                </div>
            )
        })}
    </div>

    const newRecommendations = recommendations && <ContainerRecommendations>
        {recommendations.results && recommendations.results.map((item) => {
            const newDate = corretDate(item.release_date)
            return (
                <MapRecommendations key={item.id}>
                    <div>
                        <img alt={"cartaz do filme"} src={`${BASE_URL_IMAGE_MOVIES}${item.backdrop_path}`} onClick={() => goToDetail(navigate, item.id)} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{newDate}</p>
                </MapRecommendations>
            )
        })}
    </ContainerRecommendations>

console.log(detail)
    return (
        <Conatiner>
            <header>
                <Header />
            </header>

            <ContainerInfoMovei>
                {newDatil}
            </ContainerInfoMovei>

            <ContainerInfoActor>
                <h2>Elenco original</h2>
                {newActors}
            </ContainerInfoActor>

            <ContainerTrailer>
                <h2>Trailer</h2>
                {newTrailer}
            </ContainerTrailer>

            <ContainerInfoRecommendations>
                <h2>Recomendações</h2>
                {newRecommendations}
            </ContainerInfoRecommendations>

            <ContainerButton>
                <button onClick={() => goToBack(navigate)} >Voltar</button>
            </ContainerButton>

        </Conatiner>
    )
}

export default DetailPage