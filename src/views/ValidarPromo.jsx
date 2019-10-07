import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";

class ValidarPromo extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                                <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Validar Promo</h5>
                        <input type="text" class="form-control" placeholder="Código Cupom" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <a href="#" class="btn btn-primary">Validar</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Dados Cupom</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Cliente:</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Produto:</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Quantidade:</h6>

                        <a href="#" class="btn btn-primary">Confirmar</a>
                    </div>
                    </div>
                </div>
                </div>
                </Row>
    
             </Grid>
        );
    }
}

export default ValidarPromo;