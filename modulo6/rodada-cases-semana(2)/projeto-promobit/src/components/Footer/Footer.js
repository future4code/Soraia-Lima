import React, { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Footer = () => {
   const { states, setters } = useContext(GlobalContext)

        const [page, setPage] = React.useState(1);
        const handleChange = (event, value) => {
            setPage(value);
        };

 

    return (
        <Stack spacing={2}>
            <Pagination count={100} page={page} onChange={handleChange} />
        </Stack>
    )
}

export default Footer