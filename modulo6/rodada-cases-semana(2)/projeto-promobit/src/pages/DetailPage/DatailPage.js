import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetaillMovei } from "../../request/request"
import Header from '../../components/Headers/Header'
import { ContainerInfoMovei, ContainerDetail } from "./styled"
import { BASE_URL_MOVEIS } from "../../constants/url"
import { GlobalContext } from "../../context/GlobalContext"


const DetailPage = () => {
    const pathParams = useParams()
    const id = pathParams.id

    const [detail, setDetail] = useState([])
    // const { states, setters } = useContext(GlobalContext)


    useEffect(() => {
        getDetaillMovei(id, setDetail)
    }, [])

    const newDatil = detail && <ContainerDetail>
        <div>
        {detail.poster_path && <img  alt={"cartaz do filme"} src={`${BASE_URL_MOVEIS}${detail.poster_path}`}/>}
        </div>
    </ContainerDetail>
    
    
    console.log(detail)
    return (
        <div>
            <header>
                <Header />
            </header>
            <ContainerInfoMovei>
              {newDatil}
            </ContainerInfoMovei>
        </div>
    )
}

export default DetailPage