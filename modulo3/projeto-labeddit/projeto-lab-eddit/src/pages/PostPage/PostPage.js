import React, { useState } from "react"
import { Posts, PostFooter, TextPost } from "./styled"
import useForm from "../../hooks/useForm"
import useProtectedPage from "../../hooks/useProtectedPage"
import { createComment, useData, createCommentVote, useResquestData } from "../../requests/requests"
import { goToFeed } from "../../router/coordinatis"
import { useHistory, useParams } from "react-router-dom"


// import { getPosts, getPostComments, createPost, createPostVote, createCommentVote, changePostVote, changeCommentVote, deletePostVote, deleteCommentVote } from "../../requests/requests"

function PostPage() {
    useProtectedPage()

    const posts = useResquestData([])
    // const [informacao, setInformacao] = useState({})
    // const [infoPostage, setInfoPostagem] = useState ([])

    const { form, onChange, cleanFields } = useForm({
        body: ""
    })

    const history = useHistory()

    const pathParams = useParams()
    const id = pathParams.id

    const post = posts.filter((post) => {
        return post.id === id
    }).map((post) => {
        return (
            <div key={post.id}>

                <h3>{post.username}</h3>
                <TextPost>{post.body}</TextPost>
                <PostFooter>
                    {/* <p> ⬆️ {post.voteSum ? post.voteSum : 0} ⬇️</p> */}
                    
                    <span>{post.commentCount ? post.commentCount : 0}💬 </span>
                </PostFooter>



            </div>

        )
    })



    const comentario = useData(id, history)
    const mapComentario = comentario.map((item) => {
        return (
            <div key={item.id}>
                <p>{item.username}</p>
                <p>{item.body}</p>
               

            </div>
        )
    })

    const onSubmintForm = (event) => {
        event.preventDefault()
        createComment(id, form, cleanFields)
    }

    return (
        <Posts>
            <div>
            {post}
            </div>
            <hr/>
            
            <form onSubmit={onSubmintForm}>
                <input
                    placeholder="Escreva um comentario"
                    value={form.body}
                    onChange={onChange}
                    required
                    name={"body"}
                />

                <button>Comentar</button>
            </form>
            
            <div>
                {mapComentario}
            </div>

            <button onClick={() => { goToFeed(history) }}>Voltar</button>
        </Posts>
    )
}
export default PostPage