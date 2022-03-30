import React, {useState} from 'react'
import {GlobalContext} from './GlobalContext'

const GlobalState= (props) => {
    const [moveis, setMoveis] = useState([])
    const [detail, setDetail]  = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const states = {moveis, detail, currentPage}
    const setters = {setMoveis, setDetail, setCurrentPage}
   
    return(
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState