import axios from "axios"
import { useState, useEffect } from "react";
import { BASE_URL, ALUNO } from "../components/info";

export const useGetTripDetail  = () => {
    
    const [informacao, setInformacao] = useState([])
    const getTripDetail = (id) =>{

    const token = localStorage.getItem("token")
    axios.get(`${BASE_URL}${ALUNO}/trip/${id}`, { headers: {
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