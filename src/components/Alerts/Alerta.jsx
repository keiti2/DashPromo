import React, { Component } from 'react';

class Alerta extends Component {
    
    render() {
        return (
            <div class="alert alert-danger" role="alert">
            Erro ao conectar a API
            </div>
        );
    }
}

export default Alerta;