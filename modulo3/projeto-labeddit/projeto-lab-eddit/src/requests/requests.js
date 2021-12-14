import axios from "axios";
import { BASE_URL } from "../components/url";
import { goToFeed } from "../router/coordinatis";

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
export const signup = (bady, cleanFields, history) =>{
    axios.post(`${BASE_URL}/users/signup`, bady).then((res)=>{
        localStorage.setItem("token", res.data.token)
        cleanFields()
        goToFeed(history)
    }).catch((error)=>{
        alert(error.response.data)
    })

}