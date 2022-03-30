import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { getMoveis, getDetaillMovei } from '../../request/request'
import Header from '../../components/Headers/Header'
import Filter from '../../components/Filter/Filter'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const HomePage = () => {

    const { states, setters } = useContext(GlobalContext)
    const [page, setPage] = React.useState(1);
   
    useEffect(() => {
        getMoveis(page, setters.setMoveis)
        // getDetaillMovei(508947, setters.setDetail)
    }, [page])


    // paginação
   
    const handleChange = (event, value) => {
        console.log('valor', value)
        setPage(value);
    };

    const mapMoveis = states.moveis.results.map((item)=>{
        console.log(item)
        return(
            <div>
                
            </div>
        )
    })


    console.log(states.moveis)
    return (
        <div>
            <Header />
            <section>
                <Filter />
            </section>
            <div>
                {mapMoveis}
            </div>

            <footer>
                <Stack spacing={2}>
                    <Pagination count={states.moveis.total_pages} page={page} onChange={handleChange} />
                </Stack>
            </footer>
        </div>
    )
}

export default HomePage