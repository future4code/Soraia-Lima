import React from 'react';
import PerguntasAbertas from './PerguntasAbertas';

class InfoSuperior extends React.Component {
    render(){
        return (
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <from>
                <PerguntasAbertas pergunta ={' 5. Qual curso?'}/>
                <PerguntasAbertas pergunta ={' 6. Qual a unidade de ensino?'}/>
                </from>
                </div>
        )
    }
}

export default InfoSuperior;
