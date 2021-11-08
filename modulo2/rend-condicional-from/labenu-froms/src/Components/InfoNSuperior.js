import React from 'react'
import PerguntasAbertas from './PerguntasAbertas';
import PerguntaOpcoes from './PerguntaOpcoes'

class InfoNSuperior extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <from>
                <PerguntasAbertas pergunta ={' 5. Por que você não terminou um curso de graduação?'}/>
                <PerguntaOpcoes perguntaOp= {'6. Você fez algum curso complementar?'}
                opcoes= {['Nenhum', 'Curso técnico', 'Curso de inglês']}
               
                
                
                />   
                </from>
            </div>
        )
    }
}

export default InfoNSuperior;
