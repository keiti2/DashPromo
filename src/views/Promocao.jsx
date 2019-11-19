import React, { Component } from 'react';
import { Grid, Row, Col,Table  } from "react-bootstrap";
import { prArray } from "variables/Variables.jsx";
import Cards from "components/Card/Card.jsx";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios'
import ModalForm from '../components/ModalForm/ModalFormPromo'
import Moment from 'moment';

const options = [
    'Ativo','Inativo'
];

class Promocao extends Component {



  constructor(props){
    super(props);
    this.state={
      promocao:[],
      msgAtvInt:"",
      situacao:"Ativo"
    }
    this.atualizaPromocoes=this.atualizaPromocoes.bind(this)
  }

  componentDidMount() {
    this.getPromocoes(1)
  }

  getPromocoes(situacao){
    axios.get(`http://52.67.233.156/api/promocao`)
    .then(res => {
      const dados = res.data.data;
      const promocao=[]
      dados.map(promo =>{
          if (promo.situacao==situacao){
            promocao.push(promo)
          }
       
      })
      this.setState({ promocao });
      
    }
    )
    .catch(console.log(this.state.sucesso))
  }

  atualizaPromocoes(){
    this.getPromocoes(1)
  }

_onSelect=(event) =>{
  console.log(event.value)
  if (event.value==="Inativo"){
    this.setState({situacao:"Inativo"})
    this.getPromocoes(0)
  } else{
    this.setState({situacao:"Ativo"})
    this.getPromocoes(1)
  }
}

_handleClick = () => {
  console.log('Clicado');
}


addItemToState = (item) => {
  this.setState(prevState => ({
    items: [...prevState.items, item]
  }))
}


updateState = (item) => {
  const itemIndex = this.state.items.findIndex(data => data.id === item.id)
  const newArray = [
  // destructure all items from beginning to the indexed item
    ...this.state.items.slice(0, itemIndex),
  // add the updated item to the array
    item,
  // add the rest of the items to the array from the index after the replaced item
    ...this.state.items.slice(itemIndex + 1)
  ]
  this.setState({ items: newArray })
}

    render() {
        return (
            <Grid fluid >
               <br/>
                <Row>
                    <Col  md={7}  className="pd-top=25px">
                    <ModalForm buttonLabel="Cadastrar Promoção" addItemToState={this.addItemToState} atualizaPromocoes={this.atualizaPromocoes} />
                    </Col>
                    <Col  md={5} >
                    <Dropdown  options={options} onChange={this._onSelect} placeholder="Selecione Ativo/Inativo"  />   
                    </Col>
                </Row>

                <Row>
                <Col md={12}>
              <Cards
                title={"Promoções Cadastradas " + this.state.situacao }
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
                    {this.state.promocao.map(promo=>
                     {
                       return(
                        <tr key={promo.idPromocao}>
                          <td  >
                            <div>
                          <img src={`${new Buffer( promo.imagem, 'binary' ).toString()}`} class="img-fluid" alt="Responsive image" style={{ width: 90 }}  />
                            </div>
                            </td>
                            <td >{promo.nomePromocao}</td>
                            <td >{promo.qtde + " Uni"}</td>
                            <td >{"R$ " + promo.valorPromocao}</td>
                            <td > {Moment(promo.createdAt).format("DD/MM/YYYY")} </td>
                            <td >{this.state.situacao}</td>
                            <td>
                            <div >
                             <ModalForm buttonLabel="Editar" item={promo}  updateState={this.updateState} atualizaPromocoes={this.atualizaPromocoes}/>
                              {' '}
                                  </div>
                            </td>

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

export default Promocao;