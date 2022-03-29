import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailPage from '../pages/DetailPage/DatailPage'
import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={< HomePage />} />
                <Route path={"/detalhes/:id"} element={<DetailPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router