import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
   
 componentDidMount(){
   this.setState({modal:this.props.mod})
 }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>
      let title = this.props.title
      
      return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
         <row>
           <div>
         {this.props.msg}
           </div>
           <div>
            <Button
                    color="success"
                    onClick={this.toggle}
                    style={{float: "right", marginRight:"10px"}}>OK
            </Button>
           </div>
         </row>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm