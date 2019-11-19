import React, { Component } from 'react';
import './Styles.css'

class CardStats extends Component {
    render() {
        return (
          <div class="row">
          <div class="col-md-3">
            <div class="card-counter primary">
              <i class="fa fa-code-fork"></i>
              <span class="count-numbers">{this.props.geradas}</span>
              <span class="count-name">Geradas</span>
            </div>
          </div>
      
          <div class="col-md-3">
            <div class="card-counter danger">
              <i class="fa fa-ticket"></i>
              <span class="count-numbers">{this.props.resgatadas}</span>
              <span class="count-name">Resgatadas</span>
            </div>
          </div>
      
          <div class="col-md-3">
          <div class="card-counter info">
              <i class="fa fa-users"></i>
              <span class="count-numbers">5</span>
              <span class="count-name">Usuários</span>
            </div>
          </div>
      
          <div class="col-md-3">
          <div class="card-counter success">
              <i class="fa fa-eye"></i>
              <span class="count-numbers">45</span>
              <span class="count-name">Vizualização</span>
            </div>
          </div>
        </div>
      
        );
    }
}

export default CardStats;