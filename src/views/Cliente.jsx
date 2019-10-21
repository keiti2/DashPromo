import React, { Component } from 'react';
import Cards from "components/Card/Card.jsx";
import { Grid, Row, Col,Table } from "react-bootstrap";
import { cliArray } from "variables/Variables.jsx";
import axios from 'axios';

class Cliente extends Component {
  state={
    Cliente:[]
  }

  componentDidMount(){
    axios.get(`http://52.67.233.156/api/Cliente`)
    .then(res => {
      const Cliente = res.data.data;
      this.setState({ Cliente });
    }
    )
    .catch(console.log("Deu ruim Cliente"))
  }

    render() {
        return (
            <Grid fluid>
                <Row>
                <Col md={12}>
              <Cards
                title="Relatório cliente loja"
                category={"Total de clientes: " + this.state.Cliente.length}
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
                   {this.state.Cliente.map(cli => {
                     return (
                       <tr>
                         <td key={cli.idCliente}>{cli.nome}</td>
                         <td key={cli.idCliente}>{cli.email}</td>
                         <td key={cli.idCliente}>{cli.updatedAt}</td>
                         <td key={cli.idCliente}>{cli.createdAt}</td>
                       </tr>
                     )
                   })
                   }
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