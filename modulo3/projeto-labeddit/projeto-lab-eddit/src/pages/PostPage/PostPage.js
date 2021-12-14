import React from "react"
import like from "../../image/like.png"
import deslike from "../../image/deslike.jpg"
import comentario from "../../image/comentario.png"
import { Posts, PostFooter } from "./styled"
import incone from "../../image/incone.svg"
import { IconeComContador } from "../../components/InconeContador/InconeContador"

function PostPage() {
    return (
        <Posts>
            <h1>Nome de usuário</h1>
            <hr />
            <div>
                <h3>Texto da postagem</h3>
            </div>
            <hr />
            <PostFooter>
                {/* <IconeComContador/>
                <IconeComContador/> */}

                
                    <img src={like} alt="like" /> <p>0</p><img src={deslike} />
               
                
                    <p>0</p><img src={comentario} alt="comentarios" />
               
            </PostFooter>
                <br/>
                <br/>
                <br/>
                <br/>
            <div>
                <input
                    placeholder="Escreva seu comentario" />
                <hr />
                <button>Comentar</button>
            </div>

            <div>
                <h2>nome dp usuário</h2>
                <p>Texto da postagem</p>
                <hr />

                <img src={like} alt="like" /> <p>0</p><img src={deslike} />

            </div>
            <img src={incone}/>

        </Posts>
    )
}
export default PostPage