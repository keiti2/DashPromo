import React, { Component } from 'react';
import { Grid, Row, Col,Table } from "react-bootstrap";
import { prArray, prcArray } from "variables/Variables.jsx";
import Cards from "components/Card/Card.jsx";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    'Ativo','Inativo'
];
const defaultOption = options[0];

class Promocao extends Component {
    
    render() {
        return (
            <Grid fluid >
                <Row>
                    <Col md={9} >
                    <a href="#" class="btn btn-primary btn-custom">
                    <span class="glyphicon glyphicon-plus img-circle text-primary btn-icon"></span>
                    Cadastrar Promoção
                    </a>
                    </Col>
                    <Col md={3}>
                    <Dropdown  options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />   
                    </Col>
                </Row>

                <Row>
                <Col md={12}>
              <Cards
                title="Promoções Cadastradas"
                ctTableFullWidth
                ctTableResponsive
                content={

                  <Table striped hover>
                    <thead>
                      <tr>
                        {prArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {prcArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
                </Row>

                
            </Grid>
        );
    }
}

export default Promocao;