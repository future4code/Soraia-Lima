import React from "react"
import { Posts, Map, Comment, BotaoVoltar } from "./styled"
import useForm from "../../hooks/useForm"
import useProtectedPage from "../../hooks/useProtectedPage"
import { createComment, useData } from "../../requests/requests"
import { goToFeed } from "../../router/coordinatis"
import { useHistory, useParams } from "react-router-dom"
import Headers from "../../components/Headers/Headers"
import ContadorVotosPost from "../../components/ContadorVotoPost/ContadorVotosPost"
import ContadorComentarios from "../../components/ContadorVotosComentarios/ContadorComentarios"
import { useResquestData } from "../../hooks/useResquestData"

function PostPage() {
    useProtectedPage()

    const posts = useResquestData([])
    const history = useHistory()

    // --------------- FUNÇÕES DO FORMULARIO----------
    const { form, onChange, cleanFields } = useForm({
        body: ""
    })
    const onSubmintForm = (event) => {
        event.preventDefault()
        createComment(id, form, cleanFields)
    }

    // -------------- RETORNAR APENAS O POST SELECIONADO -------------
    const pathParams = useParams()
    const id = pathParams.id
    const post = posts.filter((post) => {
        return post.id === id
    }).map((post) => {
        return (
            <Map key={post.id}>

                <h4><img alt="usuario" src={"https://static.vecteezy.com/ti/vetor-gratis/p1/2318271-icone-do-perfil-do-usuario-gr%C3%A1tis-vetor.jpg"} /> {post.username}</h4>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <span>
                    <div>
                        <ContadorVotosPost
                            id={post.id}
                            votos={post.voteSum}
                        />
                    </div>
                    <div>|</div>
                    <p>{post.commentCount ? post.commentCount : 0} 💬 </p>
                </span>
            </Map>
        )
    })

    // -------------- RETORNAR OS COMENTÁRIOS DO POST -----------
    const comentario = useData(id, history)
    const mapComentario = comentario.map((item) => {
        return (
            <Comment key={item.id}>
                <h4> <img alt="usuario" src={"https://static.vecteezy.com/ti/vetor-gratis/p1/2318271-icone-do-perfil-do-usuario-gr%C3%A1tis-vetor.jpg"} />{item.username}</h4>
                <span>
                    <p>{item.body}</p>
                    <div>
                        <ContadorComentarios
                            id={item.id}
                            votos={item.voteSum}
                        />
                    </div>

                </span>

            </Comment>
        )
    })

    return (
        <div>
            <Headers />
            {posts.length > 0 ? <Posts>
                <h1>Detalhes do Post</h1>

                <div>
                    {post}
                </div>

                <form onSubmit={onSubmintForm}>
                    <input
                        placeholder="Novo comentário"
                        value={form.body}
                        onChange={onChange}
                        required
                        name={"body"}
                    />
                    <button>Enviar</button>
                </form>

                <div>
                    {mapComentario}
                </div>

                <BotaoVoltar onClick={() => { goToFeed(history) }}>Voltar</BotaoVoltar>
            </Posts> : <p>Loading...</p>}
        </div>
    )
}
export default PostPage