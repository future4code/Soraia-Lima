import axios from "axios"
import { useState, useEffect } from "react";


export const useGetTripDetail  = () => {

    const [informacao, setInformacao] = useState([])
    const getTripDetail = (id) =>{

    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Soraia/trip/${id}`, { headers: {
        auth: token
    }        
}).then((res)=>{
    setInformacao(res.data.trip)
}).catch((error)=>{
    console.log(error.response)
})
    }
    useEffect(() => {
        getTripDetail()
    }, [])
    
return informacao
}