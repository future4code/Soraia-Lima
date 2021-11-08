import React from "react";

class DadosGerais extends React.Component{
    render () {
        return (
            <div>

                <h2>ESTAPA 1 - DADOS GERAIS</h2>
                <from>
                    <p> 1. Qual o seu nome?</p>
                    <input/>
                    <p> 2. Qual a sua idade?</p>
                    <input/>
                    <p>3. Qual seu e-mail?</p>
                    <input/>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>

                </from>
            </div>
        )
    }
}

export default DadosGerais;