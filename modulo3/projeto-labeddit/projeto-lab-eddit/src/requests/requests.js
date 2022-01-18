import axios from "axios";
import { BASE_URL } from "../components/url";
import { goToFeed} from "../router/coordinatis";

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
export const createComment = (id, bady, cleanFields) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, bady, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        cleanFields()
    }).catch((error) => {
        console.log("Sem comentario criado :(", error.response)
    })
}

// -------------- VOTAR  EM UM POST -----------------
export const createPostVote = (id, body) => {

    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {

    }).catch((error) => {
        alert("Infelizmente, tivemos um problema, por gentileza, tente mais tarde :(", error.response)
    })
}

// --------- VOTAR EM UM COMENTARIO --------------
export const createCommentVote = (id, body) => { 
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
    }).catch((error) => {
        alert("Infelizmente, tivemos um problema, por gentileza, tente mais tarde :(", error.response)
    })
}

// ----------- MUDAR VOTO DO POST  --------------
export const changePostVote = (id, body) => { 

    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
    }).catch((error) => {
        alert("Infelizmente, tivemos um problema, por gentileza, tente mais tarde :(", error.response)
    })
}

// ------------- MUDAR VOTO DO COMENTARIO ------------------
export const changeCommentVote = (id, body) => { 

    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
    }).catch((error) => {
        alert("Infelizmente, tivemos um problemas, por gentileza, tente mais tarde :(", error.response.data)
    })
}

// ----------- DELETAR VOTO DO POST  --------------
export const deletePostVote = (id) => { 
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {

    }).catch((error) => {
        alert("Infelizmente, tivemos um problemas, por gentileza, tente mais tarde :(", error.response)
    })
}

// ------------- DELETAR VOTO DO COMENTARIO ------------------
export const deleteCommentVote = (id) => { 
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {

    }).catch((error) => {
        alert("Infelizmente, tivemos um problemas, por gentileza, tente mais tarde :(", error.response)
    })
}