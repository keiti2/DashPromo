import React from 'react';
import { Button, Form, FormGroup, Label, Input,Row,Col } from 'reactstrap';
import Dropdown from 'react-dropdown'
import Upload from '../FormInputs/Upload'
const options = [
  'Inativo','Ativo'
];

class AddEditForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      idPromocao: 0,
      nomePromocao: '',
      segmento: '',
      descricao: '',
      qtde: '',
      valorReal: 0.00,
      valorPromocao: 0.00,
      imagemPromo:[],
      situacao:1
    }
    this.atualizaImgBase64=this.atualizaImgBase64.bind(this)
  }
  
  

_onSelect=(event) =>{
  console.log(event.value)
  if (event.value==="Inativo"){
    this.setState({situacao:0})
    } else{
    this.setState({situacao:1})
  }
}
  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://52.67.233.156/api/promocao', {
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
        imagem:this.state.imagemPromo,
      })
    })
      .then(response => response.json())
      .then(item => {
        alert("Promoção Cadastrada com sucesso!")
        this.props.toggle()
        this.props.atualizaPromocoes()
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://52.67.233.156/api/promocao/altera/' + this.state.idPromocao, {
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
        imagem:this.state.imagemPromo,
      })
    })
      .then(response => response.json())
      .then(item => {
        alert("Promoção Atualizada com sucesso !")
        this.props.toggle()
        this.props.atualizaPromocoes()
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

  atualizaImgBase64(base){
    console.log(base)
    this.setState({imagemPromo:base})
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
     <Row>
       <Col md={6}>
       <FormGroup>
          <Label for="valorReal">Valor Real</Label>
          <Input type="number" name="valorReal" id="valorReal" onChange={this.onChange} value={this.state.valorReal === null ? '' : this.state.valorReal}   />
        </FormGroup>
       </Col>
       <Col md={6}>
       <FormGroup>
          <Label for="valorPromocao">Valor Promocional</Label>
          <Input type="number" name="valorPromocao" id="valorPromocao" onChange={this.onChange} value={this.state.valorPromocao}  />
        </FormGroup>
       </Col>
     </Row>

      <FormGroup>
      <Dropdown  options={options} onChange={this._onSelect} placeholder="Selecione Ativo/Inativo" value={options[this.state.situacao]} />   
      </FormGroup>

        <FormGroup>
        <Label for="imagemPromo">Imagem Promo</Label>
        <Upload atualizaImgBase64={this.atualizaImgBase64} />
      </FormGroup>

        <Button>Ok</Button>
      </Form>

      
    );
  }
}

export default AddEditForm