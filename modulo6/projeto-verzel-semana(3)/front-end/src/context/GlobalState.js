import React, { useState } from "react"
import { createClasse, createModule, deleteClasse, deleteModule, editClasse, editModule, getClasseByModule, getModules, login } from "../services/services"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [module, setModule] = useState([])
    const [classe, setClasse] = useState([])

    const requestLogin = (body, navigate) => {
        login(body, navigate)
    }

    const requestGetModule = () =>{
        getModules(setModule)
    }

    const requestCreateModule = (body) =>{
        createModule(body)
    }

    const requestEditModule = (id, body) =>{
        editModule(id, body)
    }

    const requestDeleteModule = (body) =>{
        deleteModule(body)
    }

    const requestGetClasse = (id) =>{
        getClasseByModule(id, setClasse)
    }

    const requestCreateClasse = (body) =>{
        createClasse(body)
    }

    const requestEditClasse = (id, body) =>{
        editClasse(id, body)
    }

    const requestDeleteClasse = (body) =>{
        deleteClasse(body)
    }

    const states = { module, classe }
    const setters = { setModule, setClasse }
    const requests = { requestLogin, requestGetModule, requestCreateModule, requestEditModule, requestDeleteModule, requestGetClasse, requestCreateClasse, requestEditClasse, requestDeleteClasse}

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState