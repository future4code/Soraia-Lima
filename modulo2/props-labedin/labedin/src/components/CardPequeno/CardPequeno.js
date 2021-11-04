import React from "react";
import styled from "styled-components";

const CardEmail = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    height: 60px;
`

const ImgCar = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

const DadosEnderecos = styled.div`
    display: flex;
    flex-direction: row;
`
const EspacoNome = styled.h4 `
margin-right: 5px;
`
function CardPequeno (props) {

    return(
        <CardEmail>
            <ImgCar src={props.imagem} alt="Imagem endereço"/>
            <DadosEnderecos>
                <EspacoNome>{props.nomeCardP}</EspacoNome> 
                <p>{props.endereconomeCardP}</p>
            </DadosEnderecos>
        </CardEmail>
    )

}
export default CardPequeno