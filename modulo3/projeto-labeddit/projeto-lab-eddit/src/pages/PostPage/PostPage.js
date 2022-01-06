import React from "react"
import { Posts, Map, Comment, BotaoVoltar } from "./styled"
import useForm from "../../hooks/useForm"
import useProtectedPage from "../../hooks/useProtectedPage"
import { createComment } from "../../requests/requests"
import { goToFeed } from "../../router/coordinatis"
import { useHistory, useParams } from "react-router-dom"
import Headers from "../../components/Headers/Headers"
import CountVotesComments from "../../components/CountVotesComments/CountVotesComments"
import { useRequestedData } from "../../hooks/useRequestedData"
import { useRequestedComent } from "../../hooks/useRequestedComent"
import CountVotesPost from "../../components/CountVotesPosts/CountVotesPost"
import Loading from "../../components/Loading/Loading"

function PostPage() {
    useProtectedPage()

    const posts = useRequestedData([])
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
                        <CountVotesPost
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
    const comment = useRequestedComent(id, history)
    const mapComment = comment.map((item) => {
        return (
            <Comment key={item.id}>
                <h4> <img alt="usuario" src={"https://static.vecteezy.com/ti/vetor-gratis/p1/2318271-icone-do-perfil-do-usuario-gr%C3%A1tis-vetor.jpg"} />{item.username}</h4>
                <span>
                    <p>{item.body}</p>
                    <div>
                        <CountVotesComments
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
            {posts.length > 0 ?
                <Posts>
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
                        {mapComment}
                    </div>

                    <BotaoVoltar onClick={() => { goToFeed(history) }}>Voltar</BotaoVoltar>
                </Posts>
                : <Loading />}
        </div>
    )
}
export default PostPage