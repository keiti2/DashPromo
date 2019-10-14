import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    idPromocao: 0,
    nomePromocao: '',
    segmento: '',
    descricao: '',
    qtde: '',
    valorReal: 0.00,
    valorPromocao: 0.00,
    situacao:0,
    imagemPromo:""
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://18.229.136.97:3000/api/promocao', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idPromocao: this.state.idPromocao,
        nomePromocao: this.state.nomePromocao,
        segmento: this.state.segmento,
        descricao: this.state.descricao,
        qtde: this.state.qtde,
        valorReal: this.state.valorReal,
        valorPromocao:this.state.valorPromocao,
        situacao:this.state.situacao,
        imagemPromo:this.state.imagemPromo
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://18.229.136.97:3000/api/promocao/' + this.state.idPromocao, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idPromocao: this.state.idPromocao,
        nomePromocao: this.state.nomePromocao,
        segmento: this.state.segmento,
        descricao: this.state.descricao,
        qtde: this.state.qtde,
        valorReal: this.state.valorReal,
        valorPromocao:this.state.valorPromocao,
        situacao:this.state.situacao,
        imagemPromo:this.state.imagemPromo
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { idPromocao, nomePromocao, segmento, descricao, qtde, valorReal, valorPromocao,situacao } = this.props.item
      this.setState({ idPromocao, nomePromocao, segmento, descricao, qtde, valorReal, valorPromocao,situacao })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="nomePromocao">Nome</Label>
          <Input type="text" name="nomePromocao" id="nomePromocao" onChange={this.onChange} value={this.state.nomePromocao === null ? '' : this.state.nomePromocao} />
        </FormGroup>
        <FormGroup>
          <Label for="segmento">Segmento</Label>
          <Input type="text" name="segmento" id="segmento" onChange={this.onChange} value={this.state.segmento === null ? '' : this.state.segmento}  />
        </FormGroup>
        <FormGroup>
          <Label for="descricao">descricao</Label>
          <Input type="text" name="descricao" id="descricao" onChange={this.onChange} value={this.state.descricao === null ? '' : this.state.descricao}  />
        </FormGroup>
        <FormGroup>
          <Label for="qtde">Quantidade Disponível</Label>
          <Input type="number" name="qtde" id="qtde" onChange={this.onChange} value={this.state.qtde === null ? '' : this.state.qtde}  />
        </FormGroup>
        <FormGroup>
          <Label for="valorReal">Valor Real</Label>
          <Input type="number" name="valorReal" id="valorReal" onChange={this.onChange} value={this.state.valorReal === null ? '' : this.state.valorReal}   />
        </FormGroup>
        <FormGroup>
          <Label for="valorPromocao">Valor Promocional</Label>
          <Input type="number" name="valorPromocao" id="valorPromocao" onChange={this.onChange} value={this.state.valorPromocao}  />
        </FormGroup>
        <FormGroup>
          <Label for="imagemPromo">Imagem Promo</Label>
          <Input type="file" name="imagemPromo" id="imagemPromo" onChange={this.onChange} value={this.state.imagemPromo}  />
        </FormGroup>
        <Button>Ok</Button>
        {" "}
        <Button>Cancelar</Button>
      </Form>
    );
  }
}

export default AddEditForm