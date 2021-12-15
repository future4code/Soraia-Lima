import React, { useState } from "react"

import { Posts, PostFooter, TextPost } from "./styled"
import { IconeComContador } from "../../components/InconeContador/InconeContador"
import useForm from "../../hooks/useForm"
import useProtectedPage from "../../hooks/useProtectedPage"
import { createComment } from "../../requests/requests"

// import { getPosts, getPostComments, createPost, createPostVote, createCommentVote, changePostVote, changeCommentVote, deletePostVote, deleteCommentVote } from "../../requests/requests"

function PostPage() {
    useProtectedPage()

    
    

    const { form, onChange, cleanFields } = useForm({
        body: ""
    })


    const onSubmintForm = (event) => {
        event.preventDefault()
        createComment(form, cleanFields)
    }

    // onClickCurtida = () => {
    //     console.log('Curtiu!')

    //     if (!this.state.curtido){                          // para mudar o coração
    //         setCurtido(!curtido)
    //         setNumeroCurtida(+1)
    //     }
    //     else{      
    //                                               // para dar deslike
    //     this.setState({
    //       curtido: !this.state.curtido,                  // para mudar a cor do coração
    //       numeroCurtidas: this.state.numeroCurtidas - 1 // para dar deslike

    //     })
    //   }
    //   }

   

    return (
        <Posts>
            <h1>Nome de usuário</h1>
            <hr />
            <TextPost>
                <h3>Texto da postagem</h3>
            </TextPost>
            <hr />
            <PostFooter>
                <IconeComContador/>

                

            </PostFooter>
            <br />
            <br />
            <br />
            <br />
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
                <h2>nome dp usuário</h2>
                <p>Texto da postagem</p>
                <hr />
                <IconeComContador/>
            </div>
            {/* <button onClick={(getPosts)}>Pegar posts</button>
            <button onClick={getPostComments}>Ver cometarios</button>
            <button onClick={createPost}>Criar Post</button>
           
            <button onClick={createPostVote}>Votar</button>
            <button onClick={createCommentVote}> Votar no Comentario</button>
            <button onClick={changePostVote}>Mudar voto</button>
            <button onClick={changeCommentVote}>Mudar comentario</button>
            <button onClick={deletePostVote}>Deletar Voto</button>
            <button onClick={deleteCommentVote}>Deletar comentario</button> */}

        </Posts>
    )
}
export default PostPage