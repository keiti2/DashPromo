import React, { Component } from 'react';
import { Grid, Row, Col,Table,Button  } from "react-bootstrap";
import { prArray } from "variables/Variables.jsx";
import Cards from "components/Card/Card.jsx";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios'
import ModalForm from '../components/ModalForm/ModalFormPromo'
const options = [
    'Ativo','Inativo'
];
const defaultOption = options[0];

class Promocao extends Component {
  state={
    promocao:[],
    msgAtvInt:""
  }  

  componentDidMount() {
    axios.get(`http://localhost:3000/api/promocao`)
    .then(res => {
      const promocao = res.data.data;
      this.setState({ promocao });
    }
    )
    .catch(console.log(this.state.sucesso))
  }

_onSelect=(event) =>{
  console.log(event.value)
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
                <Row>
                    <Col md={9} >
                    <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
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
                    {this.state.promocao.map(promo=>
                     {
                       return(
                        <tr key={promo.idPromocao}>
                            <td >{promo.descricao}</td>
                            <td >{promo.qtde + " Uni"}</td>
                            <td >{"R$ " + promo.valorPromocao}</td>
                            <td >{promo.updatedAt}</td>
                            <td >{"Sim"}</td>
                            <td>
                            <div >
                             <ModalForm buttonLabel="Edit" item={promo} updateState={this.props.updateState}/>
                              {' '}
                             <Button color="danger" onClick={() => this.deleteItem(promo.id)}>Del</Button>
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