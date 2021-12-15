import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { createPost, useResquestData, createPostVote} from "../../requests/requests"
import { IconeComContador } from "../../components/InconeContador/InconeContador"

function FeedPage (){
    useProtectedPage()

    const postagens = useResquestData()

    const { form, onChange, cleanFields } = useForm({
        title:"",
        body: ""
    })

    const onSubmintForm = (event) => {
        event.preventDefault()
        createPost(form, cleanFields, postagens)
    }

    const mapPostagens = postagens.map((post)=>{
        return(
            <div key={post.id}>
                <p>{post.username}</p>
                <p>{post.title}</p>
                <IconeComContador
                id={post.id}
                createPostVote={createPostVote}/>
            </div>
        )
    })
    return(
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