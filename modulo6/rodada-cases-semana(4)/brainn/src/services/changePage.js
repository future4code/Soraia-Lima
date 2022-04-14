import React, { useEffect, useState } from "react";
import { getLotteries } from "./request";

export function changePage() {

    const [lotteries, setLotteries] = useState([])
    const [contests, setContests] = useState({id: "0", nome: "Mega-Sena"})
 

    useEffect(() => {
        getLotteries(setLotteries)
    }, [])


    const selectLotteries = lotteries.map((item) => {
        return (

            <option value={item.id} key={item.id}>{item.nome.toUpperCase()}</option>
        )
    })

    const onChangeContests = (e) => {
        selectLotteries.filter((item) =>{
            if(e.target.value == item.props.value){
                setContests({id: item.props.value, nome: item.props.children})
            }
        })
    }


    console.log(contests)
    const nome = contests.nome
    return (
        <div>
            <select onChange={onChangeContests} >
                <option selected disabled >SELECIONE</option>
                {selectLotteries}
            </select>
            <h1>{nome}</h1>
        </div>
    )
}