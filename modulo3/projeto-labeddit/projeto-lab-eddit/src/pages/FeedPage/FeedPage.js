import React, {useState} from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { createPost, useResquestData, createPostVote, changePostVote, deletePostVote } from "../../requests/requests"
import { useHistory } from "react-router-dom"
import { goToPost } from "../../router/coordinatis"
import {Map, BotaoLike, BotaoDeslike, Container} from './styled'

function FeedPage() {
    useProtectedPage()

    const [like, setLike] = useState(false)
	const [deslike, setDeslike] = useState(false)

    const postagens = useResquestData()

    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const history = useHistory()

    const onSubmintForm = (event) => {
        event.preventDefault()
        createPost(form, cleanFields, postagens)
    }

    const vote = (id, valor)=>{
        const body = {
            direction: valor
        }

        if(valor === 1 && !like && !deslike){
            setLike(true)
            createPostVote(id, body, valor)
        }else if ( valor === -1 && !like && !deslike){
            setDeslike (true)
            createPostVote(id, body, valor)
        } else if(valor === 1 && like){
            setLike(false)
            deletePostVote(id)
        } else if( valor === -1 && deslike){
            setDeslike(false)
            deletePostVote(id)
        } else if (valor === 1 && deslike){
            setLike(true)
            setDeslike(false)
            changePostVote(id, body, valor)
        } else{
            setLike(false)
            setDeslike(true)
            changePostVote(id, body, valor)
        }
    }

    const mapPostagens = postagens.map((post) => {
        return (
            <div key={post.id}>

                <h3>{post.username}</h3>
                {/* <p>{post.title}</p> */}
                <p>{post.body}</p>
                <Map>  
                    <div>            
                    <BotaoLike onClick={() => {vote(post.id, 1)}} > <b>↑</b> </BotaoLike>
                    <p>{post.voteSum ? post.voteSum : 0}</p>
                    <BotaoDeslike onClick={() => {vote(post.id, -1)}}><b>↓</b></BotaoDeslike>
                    </div> 
                    <p> {post.commentCount ? post.commentCount : 0}💬</p>
                </Map>
                <button onClick={() => { goToPost(history, post.id) }}>Detalhes</button>

            </div>

        )
    })

    return (
        < Container>
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
               
            </form>
            {mapPostagens}
        </ Container>
    )
}
export default FeedPage