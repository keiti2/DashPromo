

import React, { Component } from 'react';


class Upload extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      baseimg:[],
      base64:[123]
    }
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  componentDidMount() {
    this.setState({base64:this.props.imagem})
  }



  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })

  }

  handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.setState({file: URL.createObjectURL(file)})
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base= reader.result;
      {this.setState({base64:base})}
      this.props.atualizaImgBase64(base)
    };
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleImageChange}/>
        <img src={`${new Buffer( this.props.imagem, 'binary' ).toString()}`} class="img-thumbnail"  style={{ width: 80 }}  />
      </div>
    );
  }
}

export default Upload;