import axios from "axios";
import { BASE_URL } from "../components/url";
import { goToFeed } from "../router/coordinatis";
import { useState } from "react";
import { useEffect } from "react";

const token = localStorage.getItem("token")

// --------------- LOGAR -------------
export const login = (bady, cleanFields, history) => {
    axios.post(`${BASE_URL}/users/login`, bady).then((res) => {
        localStorage.setItem("token", res.data.token)
        cleanFields()
        goToFeed(history)

    }).catch((error) => {
        alert("Email ou senha errado, por gentileza, verifique todos os campos e tente novamente.", error.response.data)
    })
}

// ---------- CRIAR NOVO USUÁRIO ---------
export const signup = (bady, cleanFields, history) => {
    axios.post(`${BASE_URL}/users/signup`, bady).then((res) => {
        localStorage.setItem("token", res.data.token)
        cleanFields()
        goToFeed(history)
    }).catch((error) => {
        alert(error.response.data)
    })

}

// -------------- VER TODOS OS POST ---------------
 
export const useResquestData = () => {

    const [postagens, setPostagens] = useState([])

    const getPosts = () => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            // console.log("Deu certo", res.data)
            setPostagens(res.data)
        }).catch((error) => {
            alert("Ah que pena, aconteceu um erro, por gentileza, tente mais tarde", error.response)
        })
    }
    
    useEffect(() => {
        getPosts()
    }, [postagens])

    return postagens
}

// ----- VER O COMENTÁRIO DE UM POST ESPECÍFICO -----

export const getPostComments = (id) => {
    axios.get(`${BASE_URL}/posts/${id}/comments`, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("Mostar comentarios", res.data)

    }).catch((error) => {
        console.log("Não mostrou comentarios", error.response.data)
    })
}

// ----------- CRIAR UM NOVO POST ---------------

export const createPost = (bady, cleanFields) => {
    axios.post(`${BASE_URL}/posts`, bady, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("Post criadohhhhhhhhhh", res.data)
        cleanFields()

    }).catch((error) => {
        alert("Aconteceu um problema, por gentileza tente mais tarde", error.response)
    })
}

// ------------ CRIAR UM NOVO COMENTARIO -----------

export const createComment = (id, bady, cleanFields) => { // id do post
    axios.post(`${BASE_URL}/posts/${id}/comments`, bady, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("Comentario criadohhhhhhhhhh", res.data)
        cleanFields()
    }).catch((error) => {
        console.log("Sem comentario criado :(", error.response)
    })
}

// -------------- VOTAR EM UM POST -----------------

export const createPostVote = (id) => { // id do post
    const bady = {
        direction: 1
    }
    axios.post(`${BASE_URL}/posts/${id}`, bady, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("Votadooooooooooo", res.data)

    }).catch((error) => {
        console.log("Não consegui votar :(", error.response)
    })
}

// --------- VOTAR EM UM COMENTARIO --------------

export const createCommentVote = (id, bady) => { // id do comentario
    axios.post(`${BASE_URL}/comments/${id}/votes`, bady, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("Voto no Comentrioooooooooooo", res.data)

    }).catch((error) => {
        console.log("Não consegui votar no COMENTARIO :(", error.response)
    })
}

// ----------- MUDAR VOTO DO COMENTARIO --------------
export const changePostVote = (id, bady) =>{  // id do post
    // const bady = {
    //     direction: -1
    // }
    axios.put(`${BASE_URL}/posts/${id}/votes`, bady, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("nadinha", res.data)

    }).catch((error) => {
        console.log("Nada COMENTARIO :(", error.response.data)
    })

} 

// ------------- MUDAR COMENTARIO ------------------
export const changeCommentVote = (id, bady) => {     // id do comentario
// const bady = {
//         direction: -1
//     }
    axios.put(`${BASE_URL}/comments/${id}/votes`, bady, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("comentario mudado", res.data)

    }).catch((error) => {
        console.log("COMENTARIO não mudado:(", error.response.data)
    })
}

export const deletePostVote =(id) =>{ // id do post 
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("Voto deletado", res.data)

    }).catch((error) => {
        console.log("Voto NÃO deletado:(", error.response)
    })
}

export const deleteCommentVote = (id) => { //id do comentario
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log("Comentario deletado", res.data)

    }).catch((error) => {
        console.log("Comentario NÃO deletado:(", error.response)
    })
}