
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-4", "col-md-3"]}
                      properties={[
                        {
                          label: "Nome Fantasia",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome Fantasia",
                          defaultValue: "Loja Teste",
                          disabled: false
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        },
                        {
                          label: "Senha",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "Senha",
                        },
                       

                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-4", "col-md-5"]}
                      properties={[
                        {
                          label: "Cnpj",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cnpj",
                          defaultValue: "64.826.000/0001-07",
                          disabled:true
                        },
                        {
                          label: "Segmento",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Segmento",
                          defaultValue: "eletronico, eletrodoméstico"
                        },
                        {
                          label: "Nome responsável",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome responsavel",
                          defaultValue: "Rogerio"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-10","col-md-2"]}
                      properties={[
                        {
                          label: "Endereco",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Endereco",
                          defaultValue:
                            "Av. teste"
                        },
                        {
                          label: "Numero",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Numero",
                          defaultValue:
                            "25"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          defaultValue: "Marília"
                        },
                        {
                          label: "Bairro",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Bairro",
                          defaultValue: "Centro"
                        },
                        {
                          label: "Cep",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code",
                          defaultValue:"17515350"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Empresa especializada no ramo eletrônico, eletrodoméstico. "
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
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