import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetaillMovei } from "../../request/request"

const DetailPage = () => {
    const pathParams = useParams()
    const id = pathParams.id

    const [detail, setDetail] = useState([])
      

    useEffect(() => {
        getDetaillMovei(id, setDetail)
    }, [])

    console.log(detail)
    return (
        <div>
            <h1>Detalhes</h1>
        </div>
    )
}

export default DetailPage