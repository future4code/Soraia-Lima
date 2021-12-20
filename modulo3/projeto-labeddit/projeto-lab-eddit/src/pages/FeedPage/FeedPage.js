import React, { useState } from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { createPost} from "../../requests/requests"
import { useHistory } from "react-router-dom"
import { goToPost } from "../../router/coordinatis"
import { Map, Container, Formulario, Filtro } from './styled'
import Headers from "../../components/Headers/Headers"
import ContadorVotosPost from "../../components/ContadorVotoPost/ContadorVotosPost"
import { useResquestData } from "../../hooks/useResquestData"


function FeedPage() {
    useProtectedPage()

    const postagens = useResquestData()

    // ----------------- FILTRO --------------
    const [query, setQuery] = useState("")
    const UpDateQuery = (e) => {
        setQuery(e.target.value)
    }

    // ------------- CRIAR NOVO POST -----------
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const history = useHistory()

    const onSubmintForm = (event) => {
        event.preventDefault()
        createPost(form, cleanFields, postagens)
    }


    // --------- RENDERIZA O POST E TAMBÉM A BUSCA DO FILTRO ----------------

    const mapPostagens = postagens.filter((post) => {
        return post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())
    }).map((post) => {
        return (
            <Map key={post.id}>
                <h4><img alt="usuario" src={"https://static.vecteezy.com/ti/vetor-gratis/p1/2318271-icone-do-perfil-do-usuario-gr%C3%A1tis-vetor.jpg"} />{post.username}</h4>
                <h2>{post.title}</h2>
                <p onClick={() => { goToPost(history, post.id) }}>{post.body}</p>
                <span>
                    <div>
                        <ContadorVotosPost
                            id={post.id}
                            votos={post.voteSum}
                        />
                    </div>
                    <div>|</div>
                    <p onClick={() => { goToPost(history, post.id) }}> {post.commentCount ? post.commentCount : 0}💬</p>
                </span>
            </Map>
        )
    })

    return (
        <div>
            <Headers />

            {postagens.length > 0 ?
                < Container>
                    <Filtro>
                        <input
                            placeholder=" 🔍 Buscar um post"
                            value={query}
                            onChange={UpDateQuery}
                        />
                    </Filtro>
                    <Formulario>
                        <h1>Novo Post</h1>
                        <form onSubmit={onSubmintForm}>
                            <input
                                placeholder="Título"
                                value={form.title}
                                onChange={onChange}
                                required
                                name={"title"}
                            />
                            <input
                                placeholder="Texto"
                                value={form.body}
                                onChange={onChange}
                                required
                                name={"body"}
                            />
                            <button>Postar</button>
                        </form>
                    </Formulario>
                    {mapPostagens}
                </ Container> : <p>Loading...</p>}
        </div>
    )
}
export default FeedPage