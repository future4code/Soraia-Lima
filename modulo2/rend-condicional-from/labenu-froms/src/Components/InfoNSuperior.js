import React from 'react'

class InfoNSuperior extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <from>
                    <p> 5. Por que você não terminou um curso de graduação?</p>
                    <input />
                    <p> 6. Você fez algum curso complementar?</p>
                    <select>
                        <option value="Nenhum">Nenhum</option>
                        <option value="Curso técnico">Curso técnico</option>
                        <option value="Curso de inglês">Curso de inglês</option>
                    </select>
                </from>
            </div>
        )
    }
}

export default InfoNSuperior;
