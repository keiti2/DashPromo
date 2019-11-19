
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import swal from 'sweetalert';
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios"
import  {Input}  from 'reactstrap';

class UserProfile extends Component {
  state={
    Empresa:{},
    cnpj:0,
    razaoSocial:"",
    email:"",
    senha:"",
    endereco:"",
    numero:0,
    cidade:"",
    bairro:"",
    cep:0,
    sobreempresa:"",
    segmento:"",
    responsavel:"",
    show:true,
    close:false
  }


  submitAtualizar = e => {
    e.preventDefault()
    fetch('http://52.67.233.156/api/empresa/altera/2', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idEmpresa: this.state.idEmpresa,
        razaoSocial: this.state.razaoSocial,
        email: this.state.email,
        senha: this.state.senha,
        cnpj: this.state.cnpj,
        segmento: this.state.segmento,
        responsavel: this.state.responsavel,
        endereco: this.state.endereco,
        numero: this.state.numero,
        cidade: this.state.cidade,
        bairro: this.state.bairro,
        cep: this.state.cep,
        sobreempresa: this.state.sobreempresa
      })
    })
      .then(response => response.json())
      .then(emp => {
        swal("Cadastro Empresa", "Cadastro atualizado com sucesso !", "success");
      })
      .catch(err => console.log(err))
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  

componentDidMount(){
  axios.get(`http://52.67.233.156/api/empresa/2`)
  .then(res => {
    const Empresa = res.data.data;
    this.setState({ Empresa });
    const { idEmpresa,razaoSocial,cnpj,segmento,responsavel,email,senha,endereco,numero,cidade,bairro,cep,sobreempresa } = this.state.Empresa;
    this.setState({ idEmpresa,razaoSocial,cnpj,segmento,responsavel,email,senha,endereco,numero,cidade,bairro,cep,sobreempresa });
  }
  )
  .catch(console.log("Deu ruim Empresa"))
}


  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Cadastro Empresa"
                content={
                  <form>
                    <Row>
                    <Col md={2}>
                        Cnpj
                      <Input type="text" name="cnpj" id="cnpj" placeholder="Cnpj" onChange={this.onChange} value={ this.state.cnpj} />
                      </Col>

                    <Col md={3}>
                      Nome Fatasia
                    <Input type="text" name="razaoSocial" id="razaoSocial" placeholder="Nome Fantasia" onChange={this.onChange} value={ this.state.razaoSocial} />
                    </Col>

                    <Col md={3}>
                        Nome Responsável
                      <Input type="text" name="responsavel" id="responsavel" placeholder="Nome Responsavel" onChange={this.onChange} value={ this.state.responsavel} />
                      </Col>

                    <Col md={3}>
                      E-mail
                    <Input type="email" name="email" id="email" placeholder="E-mail" onChange={this.onChange} value={ this.state.email} />
                    
                    </Col>
                    <Col md={1}>
                      Senha
                    <Input type="password" name="senha" id="senha" placeholder="Senha" onChange={this.onChange} value={ this.state.senha} />
                    </Col>
                    </Row>
     
                    <Row>
                      

                      <Col md={2}>
                      Cep
                      <Input type="number" name="cep" id="cep" placeholder="cep" onChange={this.onChange} value={ this.state.cep} />
                      </Col>

                      <Col md={3}>
                        Endereço
                        <Input type="text" name="endereco" id="endereco" placeholder="Endereço" onChange={this.onChange} value={ this.state.endereco} />
                      </Col>
                      
                      <Col md={3}>
                      Cidade
                      <Input type="text" name="cidade" id="cidade" placeholder="Cidade" onChange={this.onChange} value={ this.state.cidade} />
                      </Col>
                      <Col md={3}>
                      Bairro
                      <Input type="text" name="bairro" id="bairro" placeholder="bairro" onChange={this.onChange} value={ this.state.bairro} />
                      </Col>

                      <Col md={1}>
                        Número
                        <Input type="number" name="numero" id="numero" placeholder="Numero" onChange={this.onChange} value={ this.state.numero} />
                      </Col>
                      
                    </Row>

                    <Row>
                        
                    <Col md={5}>
                        Segmento
                      <Input type="text" name="segmento" id="segmento" placeholder="Segmento" onChange={this.onChange} value={ this.state.segmento} />
                     </Col>

                     <Col md={7}>
                        Sobre Empresa
                      <Input type="text" name="sobreempresa" id="sobreempresa" placeholder="Sobre Empresa" onChange={this.onChange} value={ this.state.sobreempresa} />
                     </Col>
                      
                    </Row>

                    <Button bsStyle="info" pullRight fill onClick={this.submitAtualizar}  >
                      Atualizar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
         
        </Grid>
      </div>
    );
  }
}

export default UserProfile;


/*
 <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
*/