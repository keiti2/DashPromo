

import React, { Component } from 'react';


class Upload extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      baseimg:[],
      base64:[]
    }
    this.handleImageChange = this.handleImageChange.bind(this)
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
        <img src={this.state.file} style={{ width: 114 }} />
      </div>
    );
  }
}

export default Upload;