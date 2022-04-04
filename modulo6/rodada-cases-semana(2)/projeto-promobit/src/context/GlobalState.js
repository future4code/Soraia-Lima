import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'

const GlobalState = (props) => {
    const [moveis, setMoveis] = useState([])
    // const [detail, setDetail] = useState([])

   
    // const states = { moveis, detail }
    // const setters = { setMoveis, setDetail }

    return (
        <GlobalContext.Provider value={[ moveis, setMoveis ]}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState