import React from "react";
import { Header } from "../styles";
import { useHistory } from "react-router-dom";

function Headers() {
    const history = useHistory()

    const areAdmin = () => {
        history.push("/admin-trips-list")
    }
    const backToStart = () => {
        history.push("/")
    }
    const pageSeeTrip = () => {
        history.push("/trips/:list")
    }

    return (
        <Header>
            <h1>LabeX</h1>
            <div>
                <button onClick={backToStart}><b>Home</b></button>
                <button onClick={pageSeeTrip}><b>Viagens</b></button>
                <button onClick={areAdmin}><b>Área Admin</b></button>
            </div>
        </Header>
    )
}

export default Headers