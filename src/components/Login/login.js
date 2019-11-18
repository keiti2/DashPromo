import React, { Component } from 'react';
import './login.css'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

class login extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  validou:"",
		  senha:"",
		  email:"",
		  redirect: false,
		  mensagem:""
		}
	  }

onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='admin/dashboard' />
    }
  }

  setRedirect = () => {
	  if (this.state.email=="admin" && this.state.senha=="admin"){
		this.setState({redirect: true})
	  }else{
		this.setState({mensagem: "Dados Inválidos"})
	  }
  }
    render() {

	
		 
        return (
            <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">

				<div class="login100-pic js-tilt" data-tilt>
                    <img src="/static/media/reactlogo.aaac587d.png" alt="description"/>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Bem Vindo
					</span>
					<span>
					<p  style={{textAlign:"center",color:"red",fontSize:"20px"}}>{this.state.mensagem}</p>
					</span>
				
					<div class="wrap-input100" >
						<input class="input100" type="text" name="email" id="email" onChange={this.onChange} placeholder="Email"></input>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 " >
						<input class="input100" type="password" name="senha" id="senha" onChange={this.onChange}  placeholder="Password"></input>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
					{this.renderRedirect()}

					<button class="login100-form-btn" onClick={this.setRedirect}>
							Login
						</button>
					</div>


					<div class="text-center p-t-136">
						
					</div>
				</form>
			</div>
		</div>
	</div>
   );  
	}
	}


export default login;