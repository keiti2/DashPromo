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
          resgatadas:0,
          btnconfirmar:true,
          codigocupom:"",
          dadosCupom:[],
          nomecliente:"",
          qtde:0,
          nomePromo:"",
          idcupom:0,
          btnstyle:"secondary"
        }
        this.validarCupom=this.validarCupom.bind(this)
        this.confirmar=this.confirmar.bind(this)
        this.gerarPromoResgatada=this.gerarPromoResgatada.bind(this)
      }

    componentDidMount() {
     this.gerarPromoResgatada()
      }

      gerarPromoResgatada(){
        axios.get(`http://52.67.233.156/api/cupom`)
        .then(res => {
          const promo = res.data.data;
          const promocao =[]
          promo.map(p=>{
            if(p.utilizado===1){
              promocao.push(p)
            }
          })
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
      if(this.state.dadosCupom.data.utilizado===1){
          alert("Cupom já utilizado.")
      }else{
        this.setState({nomecliente:dadosCupom.data.cliente.nome,nomePromo:dadosCupom.data.promocao.nomePromocao,qtde:dadosCupom.data.qtde,idcupom:dadosCupom.data.idCupom,btnstyle:"success"})
      }
    }else{
      alert("Codigo cupom inválido")
    }
  }
  )
}      

confirmar(){
    if (this.state.idcupom>0){
      axios.put('http://52.67.233.156/api/cupom/altera/' + this.state.idcupom, { utilizado:'1' })
        .then(function(response){
          alert("Cupom validado com sucesso !")
        });  
    }else{
      alert("Digite primeiro o código do cupom !")
    }
    this.gerarPromoResgatada()
          this.setState({codigocupom:"",nomecliente:"",nomePromo:"",qtde:0,idcupom:0,btnstyle:"secondary"})
          this.gerarPromoResgatada()

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
                            <Button bsStyle="success" pullRight fill   onClick={this.validarCupom} >
                                Validar
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
                            <Button bsStyle={this.state.btnstyle} pullRight fill onClick={this.confirmar}  >
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