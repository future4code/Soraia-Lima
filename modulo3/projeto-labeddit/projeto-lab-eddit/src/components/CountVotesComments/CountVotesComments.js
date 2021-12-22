import { useState } from "react"
import { createCommentVote, deleteCommentVote, changeCommentVote } from "../../requests/requests";
import { BotaoLike, BotaoLike2, BotaoDeslike, BotaoDeslike2 } from "./styled";

function CountVotesComments(props) {

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
            createCommentVote(id, body)
        } else if (valor === 1 && like) {
            setLike(false)
            deleteCommentVote(id)
        } else if (valor === -1 && deslike) {
            setDeslike(false)
            deleteCommentVote(id)
        } else if (valor === 1 && deslike) {
            setLike(true)
            setDeslike(false)
            changeCommentVote(id, body)
        } else {
            setLike(false)
            setDeslike(true)
            changeCommentVote(id, body)
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

export default CountVotesComments
