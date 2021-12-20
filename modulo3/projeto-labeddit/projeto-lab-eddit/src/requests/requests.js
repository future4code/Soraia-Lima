import axios from "axios";
import { BASE_URL } from "../components/url";
import { goToFeed, goToPost } from "../router/coordinatis";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";



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

// // -------------- VER TODOS OS POST ---------------

// export const useResquestData = () => {

//     const [postagens, setPostagens] = useState([])

//     const getPosts = () => {
//         axios.get(`${BASE_URL}/posts`, {
//             headers: {
//                 Authorization: localStorage.getItem("token")
//             }
//         }).then((res) => {
//             // console.log("Deu certo", res.data)
//             setPostagens(res.data)
//         }).catch((error) => {
//             console.log(error.response)
//         })
//     }

//     useEffect(() => {
//         getPosts()
//     }, [postagens])

//     return postagens
// }




// ----- VER O COMENTÁRIO DE UM POST ESPECÍFICO -----

export const useData = (id) => {
    const [detalhes, setDetalhes] = useState([])

    const getPostComments = () => {

        axios.get(`${BASE_URL}/posts/${id}/comments`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setDetalhes(res.data)

        }).catch((error) => {
            console.log("Não mostrou comentarios", error.response)
        })
    }
    useEffect(() => {
        getPostComments()
    }, [detalhes])
    return detalhes
}

// export const getPostComments = (id, history) => {

//     axios.get(`${BASE_URL}/posts/${id}/comments`, {
//         headers: {
//             Authorization: token
//         }
//     }).then((res) => {
//         console.log("Mostar comentarios", res.data)
//         goToPost(history, id)
//         // setDetalhes(res.data)

//     }).catch((error) => {
//         console.log("Não mostrou comentarios", error.response)
//     })      
// }

// ----------- CRIAR UM NOVO POST ---------------

export const createPost = (bady, cleanFields) => {
    axios.post(`${BASE_URL}/posts`, bady, {
        headers: {
            Authorization: localStorage.getItem("token")
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
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log("Comentario criadohhhhhhhhhh", res.data)
        cleanFields()
    }).catch((error) => {
        console.log("Sem comentario criado :(", error.response)
    })
}

// -------------- VOTAR  EM UM POST -----------------

export const createPostVote = (id, body, valor) => { // id do post

    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log("Votadooooooooooo", res.data)
        console.log(valor)

    }).catch((error) => {
        console.log("Não consegui votar :(", error.response)
    })
}

// --------- VOTAR EM UM COMENTARIO --------------

export const createCommentVote = (id, body, valor) => { // id do comentario
       axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log("Voto no Comentrioooooooooooo", res.data)
        console.log(valor)
    }).catch((error) => {
        console.log("Não consegui votar no COMENTARIO :(", error.response)
    })
}

// ----------- MUDAR VOTO DO POST  --------------
export const changePostVote = (id, body, valor) => {  // id do post
    
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log("DESFEZ O VOTO DO POST", res.data)
        console.log(valor)
    }).catch((error) => {
        console.log("NÃO MUDOU O VOTO DO POST :(", error.response)
    })

}

// ------------- MUDAR VOTO DO COMENTARIO ------------------
export const changeCommentVote = (id, body, valor) => {     // id do comentario
    
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log("comentario mudado", res.data)
        console.log(valor)
    }).catch((error) => {
        console.log("COMENTARIO não mudado:(", error.response.data)
    })
}

export const deletePostVote = (id) => { // id do post 
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
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
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log("Comentario deletado", res.data)

    }).catch((error) => {
        console.log("Comentario NÃO deletado:(", error.response)
    })
}