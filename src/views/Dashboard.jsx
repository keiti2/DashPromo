import React, { Component } from "react";
import { Grid, Row, Col,Table } from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";
import CardStat from "components/Card/CardStats"
import Alerta from "components/Alerts/Alerta.jsx"
class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      sucesso:"True",
      promocao:[]  ,
      resgatadas:0,
      geradas:0
    }
  }

  componentDidMount() {
    axios.get(`http://52.67.233.156/api/cupom`)
    .then(res => {
      const promocao = res.data.data;
      this.setState({ promocao });
      this.statusResgatadas()
    }
    )
  }

  statusResgatadas(){
   
    this.state.promocao.map(promo=>{
      if (promo.utilizado===1){
        this.setState({value:this.state.resgatadas += 1});
      }else{
        this.setState({value:this.state.geradas += 1});
      }
    })
    return(this.state.resgatadas)
  }

  render() {
    return (
        <Grid fluid>
          <br/>
          <CardStat
          geradas={this.state.geradas}
          resgatadas={this.state.resgatadas}
          />

         {/*
              <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-angle-down-circle text-warning" />}
                statsText= "Geradas"
                statsValue={this.state.promocao.length}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Resgatadas"
                statsValue={this.state.promocao.length}
                />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-add-user text-success" />}
                statsText="Usuários"
                statsValue="+15"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-look" />}
                statsText="Vizualização"
                statsValue="+45"
              />
            </Col>
          </Row>
        
        */}  
        <br/>
          <Row>
        <Col md={12}>
              <Card
                title="Promoções resgatadas"
                category="Promoções resgatadas do dia"
                ctTableFullWidth
                ctTableResponsive
                content={
                  
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      
                     {this.state.promocao.map(promo=>
                     {
                       return(
                        <tr key={promo.idPromocao}>
                            <td >{promo.promocao.nomePromocao}</td>
                            <td >{promo.qtde + " Uni"}</td>
                            <td >{"R$ " + promo.promocao.valorPromocao}</td>
                            <td >{promo.cliente.nome}</td>
                          </tr>
                       )
                     }
                      )} 
                    </tbody>
                  </Table>
                }
              />
            </Col>
        </Row>
        <Row> 
          <Col md={12}>
          {this.state.sucesso==="False"?<Alerta/>:null}
          </Col>
        </Row>
        </Grid>
    );
  }
}

export default Dashboard;
