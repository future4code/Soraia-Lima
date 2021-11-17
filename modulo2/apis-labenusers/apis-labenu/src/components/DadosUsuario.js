import React from "react";
import axios from "axios";

class DadosUsuario extends React.Component{

    state = {
        listaDeUsuarios : [],
        nome: "",
        email: ""
    }

    renderizaNome =(event) =>{
        this.setState({nome: event.target.value})
        
    }
    renderizaEmail =(event) =>{
        this.setState({email: event.target.value})
        
    }

    //--------------------CRIAR UM NOVO USUARIO---------
    createUser = () =>{
        const body ={
            name: this.state.nome,
            email: this.state.email
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers:{
                Authorization: "soraia-aparecida-carver"
            }
        }).then(() =>{
            alert("sucesso")
            this.setState({nome: ""})
            this.setState({email: ""})
        }).catch((erro) =>{
            console.log(erro.data)
            alert("Não foi possível realizar o cadastro. Por favor, verifique todos os campos e tente novamente")
        })
    }
    

    render(){
        // ----------- PARA SER RENDERIZADO NA TELA ----------
       
        return(
            <div>
                <input
                placeholder ={"Nome"}
                value={this.state.nome}
                onChange={this.renderizaNome}/>
                <input
                placeholder ={"email"}
                value={this.state.email}
                onChange={this.renderizaEmail}/>
                <button onClick ={this.createUser}>Cadastrar novo usuarios</button>
                
                </div>
        )
    }
}

export default DadosUsuario