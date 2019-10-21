
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
} from "react-bootstrap";



import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios"
import  {Input}  from 'reactstrap';


class UserProfile extends Component {
  


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
        alert("Empresa Atualizada !")
      })
      .catch(err => console.log(err))
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }


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
    responsavel:""
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
                    <Col md={5}>
                      Nome Fatasia
                    <Input type="text" name="razaoSocial" id="razaoSocial" placeholder="Nome Fantasia" onChange={this.onChange} value={ this.state.razaoSocial} />
                    </Col>

                    <Col md={4}>
                      E-mail
                    <Input type="email" name="Email" id="Email" placeholder="E-mail" onChange={this.onChange} value={ this.state.email} />
                    </Col>

                    <Col md={3}>
                      Senha
                    <Input type="password" name="Senha" id="Senha" placeholder="Senha" onChange={this.onChange} value={ this.state.senha} />
                    </Col>
                    </Row>
     
                    <Row>
                      <Col md={3}>
                        Cnpj
                      <Input type="text" name="Cnpj" id="Cnpj" placeholder="Cnpj" onChange={this.onChange} value={ this.state.cnpj} />
                      </Col>

                      <Col md={4}>
                        Segmento
                      <Input type="text" name="Segmento" id="Segmento" placeholder="Segmento" onChange={this.onChange} value={ this.state.segmento} />
                      </Col>

                      <Col md={5}>
                        Nome Responsável
                      <Input type="text" name="responsavel" id="responsavel" placeholder="Nome Responsavel" onChange={this.onChange} value={ this.state.responsavel} />
                      </Col>
                    </Row>


                    <Row>
                      <Col md={10}>
                        Endereço
                        <Input type="text" name="endereco" id="endereco" placeholder="Endereço" onChange={this.onChange} value={ this.state.endereco} />
                      </Col>
                      <Col md={2}>
                        Numero
                        <Input type="number" name="Numero" id="Numero" placeholder="Numero" onChange={this.onChange} value={ this.state.numero} />
                      </Col>
                    </Row>
              
                    <Row>
                      <Col md={4}>
                      Cidade
                      <Input type="text" name="Cidade" id="Cidade" placeholder="Cidade" onChange={this.onChange} value={ this.state.cidade} />
                      </Col>
                      <Col md={4}>
                      Bairro
                      <Input type="text" name="bairro" id="bairro" placeholder="bairro" onChange={this.onChange} value={ this.state.bairro} />
                      </Col>
                      <Col md={4}>
                      Cep
                      <Input type="number" name="cep" id="cep" placeholder="cep" onChange={this.onChange} value={ this.state.cep} />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          Sobre Empresa
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Sobre Empresa"
                            defaultValue= {this.state.sobreempresa}
                          />
                        </FormGroup>
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