import React, { Component } from 'react';
import Cards from "components/Card/Card.jsx";
import { Grid, Row, Col,Table } from "react-bootstrap";
import { cliArray, clicArray } from "variables/Variables.jsx";

class Cliente extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                <Col md={12}>
              <Cards
                title="Relatório cliente loja"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {cliArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {clicArray.map((prop, key) => {
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

export default Cliente;