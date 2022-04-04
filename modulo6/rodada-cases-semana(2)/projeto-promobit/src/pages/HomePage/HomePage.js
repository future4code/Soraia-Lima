import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { getMoveis } from '../../request/request'
import Header from '../../components/Headers/Header'
import Filter from '../../components/Filter/Filter'
import Stack from '@mui/material/Stack';
import { corretDate } from '../../services/CorretDate'
import { BASE_URL_MOVEIS } from '../../constants/url'
import { Container, MapMoveis } from './styled'
import Pagination from '@mui/material/Pagination'
import { goToDetail } from '../../router/coodinator'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const [ moveis, setMoveis ] = useContext(GlobalContext)
    const [page, setPage] = React.useState(1);
    const navigate = useNavigate()

    useEffect(() => {
        getMoveis(page, setMoveis)
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
    };

    const mapMoveis = moveis.results?.map((item) => {
        const newDate = corretDate(item.release_date)
        return (
            <MapMoveis key={item.id}>
                <img alt={"cartaz do filme"} src={`${BASE_URL_MOVEIS}${item.poster_path}`} onClick={() => goToDetail(navigate, item.id)}/>
                <h3>{item.title}</h3>
                <p>{newDate}</p>
            </MapMoveis>
        )
    })

    
    console.log(moveis)
    return (
        <Container>
            <header>
                <Header />
                <section>
                    <Filter />
                </section>
            </header>
            <main>
                {mapMoveis}
            </main>

            <footer>
                <Stack spacing={2}>
                    <Pagination count={moveis.total_pages} page={page} onChange={handleChange} color="secondary" />
                </Stack>
            </footer>
        </Container>
    )
}

export default HomePage