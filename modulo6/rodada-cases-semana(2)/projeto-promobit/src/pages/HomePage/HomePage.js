import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { getMovies } from '../../request/request'
import Header from '../../components/Headers/Header'
import Filter from '../../components/Filter/Filter'
import Stack from '@mui/material/Stack';
import { corretDate } from '../../services/CorretDate'
import { BASE_URL_IMAGE_MOVIES } from '../../constants/url'
import { Container, MapMoveis } from './styled'
import Pagination from '@mui/material/Pagination'
import { goToDetail } from '../../router/coodinator'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const [moveis, setMoveis] = useContext(GlobalContext)
    const [page, setPage] = React.useState(1);
    const navigate = useNavigate()

    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        getMovies(page, setMoveis)
        onTop()
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
    };

    const mapMoveis = moveis.results?.map((item) => {
        const newDate = corretDate(item.release_date)
        return (
            <MapMoveis key={item.id}>
                <div>
                    <img alt={"cartaz do filme"} src={`${BASE_URL_IMAGE_MOVIES}${item.poster_path}`} onClick={() => goToDetail(navigate, item.id)} />
                </div>
                <h3>{item.title}</h3>
                <p>{newDate}</p>
            </MapMoveis>
        )
    })

    return (
        <Container>
            <header>
                <Header />
            </header>
            {moveis.results?.length > 0 ? <>
                <section>
                    <Filter />
                </section>
                <main>
                    {mapMoveis}
                </main>

                <footer>
                    <Stack spacing={2}>
                        <Pagination count={moveis.total_pages} page={page} onChange={handleChange} color="secondary" />
                    </Stack>
                </footer>
            </> : <p>carregando...</p>}
        </Container>
    )
}

export default HomePage