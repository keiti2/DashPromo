import React, { Component } from 'react';
import { Grid, Row, Col,Table } from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import  {Input}  from 'reactstrap';

class ValidarPromo extends Component {
    constructor(props){
        super(props);
        this.state={
          sucesso:"True",
          promocao:[]  ,
          value:0,
          btnconfirmar:true,
          codigocupom:"",
          dadosCupom:[],
          nomecliente:"",
          qtde:0,
          nomePromo:""
        }
        this.validarCupom=this.validarCupom.bind(this)
      }

    componentDidMount() {
        axios.get(`http://52.67.233.156/api/cupom`)
        .then(res => {
          const promocao = res.data.data;
          this.setState({ promocao });
        }
        )
      }

validarCupom(){
  axios.get(`http://52.67.233.156/api/cupom/`+ this.state.codigocupom)
  .then(res => {
    const dadosCupom = res.data;
    this.setState({ dadosCupom });
    if (this.state.dadosCupom.message=="Cupom"){
      this.setState({nomecliente:dadosCupom.data.cliente.nome,nomePromo:dadosCupom.data.promocao.nomePromocao,qtde:dadosCupom.data.qtde})

    }else{
      alert("Codigo cupom inválido")
    }
  }
  )
  
  console.log("Validou")
}      

onChange = e => {
  this.setState({[e.target.name]: e.target.value})
}

    render() {
        return (
            <Grid fluid >
                <br></br>
                <Row>
                    <div class="col-md-6">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title" text-align="center">Digite o código do cupom promocional</h5>
                            <Input type="text" name="codigocupom" id="codigocupom" placeholder="Código Cupom" onChange={this.onChange} value={ this.state.codigocupom} />
                            <br></br>
                            <Button  pullRight fill  onClick={this.validarCupom} >
                                Validarrr
                            </Button>
                            
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Dados Cupom:</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Cliente: {this.state.nomecliente}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Produto: {this.state.nomePromo}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Quantidade: {this.state.qtde}</h6>
                        <div display='none'>
                            <Button  pullRight fill   >
                                Confirmar
                            </Button>
                        </div>
                        </div>
                        </div>
                    </div>
                </Row>

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


                </Grid>
            

              
        );
    }
}

export default ValidarPromo;