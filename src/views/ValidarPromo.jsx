import React, { Component } from 'react';
import { Grid, Row, Col,Table } from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
class ValidarPromo extends Component {
    constructor(props){
        super(props);
        this.state={
          sucesso:"True",
          promocao:[]  ,
          value:0
        }
      }

    componentDidMount() {
        axios.get(`http://52.67.233.156/api/cupom`)
        .then(res => {
          const promocao = res.data.data;
          this.setState({ promocao });
        }
        )
      }

    render() {
        return (
            <Grid >
                <br></br>
                <Row>
                    <div class="col-md-6" text-align="center">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title" text-align="center">Digite o código do cupom promocional</h5>
                            <input type="text" class="form-control" placeholder="Código Cupom" aria-label="Username" aria-describedby="basic-addon1"></input>
                            <br></br>
                            <Button bsStyle="validar" pullRight fill   >
                                Validar
                            </Button>
                            
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Dados Cupom:</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Cliente:</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Produto:</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Quantidade:</h6>
    
                            <a href="#" class="btn btn-primary">Confirmar</a>
                        </div>
                        </div>
                    </div>
                </Row>
                </Grid>
            

              
        );
    }
}

export default ValidarPromo;