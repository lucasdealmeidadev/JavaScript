import React, { Component } from 'react';
import './App.css';

const customer = 'Lucas de Almeida Monteiro';
const hasCustomer = true;



class App extends Component {

  renderShowHistory() {
    return (
      <div>
        Clique no botão abaixo para visualizar o histórico dos clientes
        <p><button>Histórico dos clientes</button></p>
      </div>
    );
  }

  renderAddCustomer() {
    return (
      <div>
        Clique abaixo para cadastrar um cliente
        <p><button>Cadastrar clientes</button></p>
      </div>
    );
  }

  showCustomer() {

    if (!hasCustomer) {
      return null;
    }
    else {
      return (
        <div>
          <h3>Nome do cliente : {customer}</h3>
        </div>
      )
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">

          {hasCustomer ? this.renderShowHistory() : this.renderAddCustomer()}

          <div>
            {this.showCustomer()}
          </div>

        </header>
      </div>
    );

  }
}

export default App;
