import React, { useState } from "react"
import { Posts, Map, Comment, BotaoLike, BotaoDeslike, BotaoVoltar } from "./styled"
import useForm from "../../hooks/useForm"
import useProtectedPage from "../../hooks/useProtectedPage"
import { createComment, useData, createCommentVote, changeCommentVote, deleteCommentVote, useResquestData } from "../../requests/requests"
import { goToFeed } from "../../router/coordinatis"
import { useHistory, useParams } from "react-router-dom"
import Headers from "../../components/Headers/Headers"

function PostPage() {
    useProtectedPage()

    const posts = useResquestData([])
    const history = useHistory()

    //-------------- VOTAR EM UM COMENTÁRIO ----------
    const [like, setLike] = useState(false)
    const [deslike, setDeslike] = useState(false)
    const vote = (id, valor) => {
        const body = {
            direction: valor
        }

        if (valor === 1 && !like && !deslike) {
            setLike(true)
            createCommentVote(id, body, valor)
        } else if (valor === -1 && !like && !deslike) {
            setDeslike(true)
            createCommentVote(id, body, valor)
        } else if (valor === 1 && like) {
            setLike(false)
            deleteCommentVote(id)
        } else if (valor === -1 && deslike) {
            setDeslike(false)
            deleteCommentVote(id)
        } else if (valor === 1 && deslike) {
            setLike(true)
            setDeslike(false)
            changeCommentVote(id, body, valor)
        } else {
            setLike(false)
            setDeslike(true)
            changeCommentVote(id, body, valor)
        }
    }

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
                    <p> <b>votos:</b> {post.voteSum ? post.voteSum : 0} </p>
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
                        <BotaoLike onClick={() => { vote(item.id, 1) }} > <b>↑</b> </BotaoLike>
                        <p>{item.voteSum ? item.voteSum : 0}</p>
                        <BotaoDeslike onClick={() => { vote(item.id, -1) }}><b>↓</b></BotaoDeslike>
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