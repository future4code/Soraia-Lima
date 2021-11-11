import React from "react";

class PerguntasAbertas extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.pergunta}</p>
                <input />
            </div>
        )
    }
}

export default PerguntasAbertas;