import { useState } from "react";
import { createPostVote, deletePostVote, changePostVote } from "../../requests/requests";
import { BotaoLike, BotaoLike2, BotaoDeslike, BotaoDeslike2 } from "./style";

function ContadorVotosPost(props) {

    const [like, setLike] = useState(false)
    const [deslike, setDeslike] = useState(false)

    // ------------------ VOTAR EM UM POST -----------------
    const vote = (id, valor) => {
        const body = {
            direction: valor
        }

        if (valor === 1 && !like && !deslike) {
            setLike(true)
            createPostVote(id, body, valor)

        } else if (valor === -1 && !like && !deslike) {
            setDeslike(true)
            createPostVote(id, body, valor)
        } else if (valor === 1 && like) {
            setLike(false)
            deletePostVote(id)
        } else if (valor === -1 && deslike) {
            setDeslike(false)
            deletePostVote(id)
        } else if (valor === 1 && deslike) {
            setLike(true)
            setDeslike(false)
            changePostVote(id, body, valor)
        } else {
            setLike(false)
            setDeslike(true)
            changePostVote(id, body, valor)
        }
    }


    return (
        <div>
            {like === false ? <BotaoLike onClick={() => { vote(props.id, 1) }} > <b>↑</b> </BotaoLike> : <BotaoLike2 onClick={() => { vote(props.id, 1) }} > <b>↑</b> </BotaoLike2>}
            <p>{props.votos ? props.votos : 0}</p>
            {deslike === false ? <BotaoDeslike onClick={() => { vote(props.id, -1) }}><b>↓</b></BotaoDeslike> : <BotaoDeslike2 onClick={() => { vote(props.id, -1) }}><b>↓</b></BotaoDeslike2>}
        </div>
    )
}

export default ContadorVotosPost;