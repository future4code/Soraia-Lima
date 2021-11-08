import React from "react";

class PerguntaOpcoes extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.perguntaOp}</p>
                    <select>
                        const novasOpcoes = {this.props.opcoes.map((opcao) =>{
                            return <option>{opcao}</option>})
                        }

                    </select>
                    
            </div>
        )
    }
}

export default PerguntaOpcoes;