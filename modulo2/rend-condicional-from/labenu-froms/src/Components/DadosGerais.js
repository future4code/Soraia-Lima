import React from "react";
import PerguntasAbertas from './PerguntasAbertas'
import PerguntaOpcoes from "./PerguntaOpcoes";

class DadosGerais extends React.Component{
    render () {
        return (
            <div>

                <h2>ESTAPA 1 - DADOS GERAIS</h2>
                <from>
                <PerguntasAbertas pergunta ={' 1. Qual o seu nome?'}/>
                <PerguntasAbertas pergunta ={'2. Qual a sua idade?'}/>
                <PerguntasAbertas pergunta ={'3. Qual seu e-mail?'}/>
                <PerguntaOpcoes perguntaOp= {'Qual a sua escolaridade?'}
                opcoes= {['Ensino médio completo', 'Ensino médio incompleto ', 'Ensino superior completo', 'Ensino superior incompleto']}
                />   
                </from>
            </div>
        )
    }
}

export default DadosGerais;