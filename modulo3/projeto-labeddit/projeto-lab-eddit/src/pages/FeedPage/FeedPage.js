import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { createPost, useResquestData, createPostVote, changePostVote } from "../../requests/requests"
import { ContadorVotoPost } from "../../components/InconeContador/ContadorVotoPost"
import { useHistory } from "react-router-dom"
import { goToPost } from "../../router/coordinatis"

function FeedPage() {
    useProtectedPage()

    const postagens = useResquestData()
    // console.log(postagens)
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const history = useHistory()

    const onSubmintForm = (event) => {
        event.preventDefault()
        createPost(form, cleanFields, postagens)
    }



    const mapPostagens = postagens.map((post) => {
        return (
            <div key={post.id}>

                <h3>{post.username}</h3>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <ContadorVotoPost
                    createPostVote={() => createPostVote(post.id)}
                    voto={post.voteSum}
                    userVote={post.userVote}
                    changePostVote={()=>{changePostVote(post.id)}}
                
                />
                <p>comentarios : {post.commentCount ? post.commentCount : 0}</p>
                <button onClick={() => { goToPost(history, post.id) }}>Detalhes</button>

            </div>

        )
    })

    return (
        <div>
            <form onSubmit={onSubmintForm}>
                <input
                    placeholder="Titulo do comentario"
                    value={form.title}
                    onChange={onChange}
                    required
                    name={"title"}
                />
                <input
                    placeholder="Escreva um comentario"
                    value={form.body}
                    onChange={onChange}
                    required
                    name={"body"}
                />
                <button>Postar</button>
                {mapPostagens}
            </form>
        </div>
    )
}
export default FeedPage