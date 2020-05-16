import React, { Component } from 'react';
import './App.css';

const lisCustomer = [
  {
    id: 1,
    nome: 'Lucas',
    skills: [
      'React', 
      'NodeJS', 
      'CSS', 
      'PHP'
    ]
  },

  {
    id: 2,
    nome: 'Maria',
    skills: [
      'PHP', 
      'NodeJS'
    ]
  },

  {
    id: 3,
    nome: 'João',
    skills: [
      'NodeJS',
      'Java'
    ]
  },

  {
    id: 4,
    nome: 'Pedro',
    skills: [
      'PHP',
      'HTML5'
    ]
  }
];

class App extends Component {

  renderCustomers(customer, index){

    return (
      <div style={{textAlign: 'left'}} key={`customer-${customer.id}`}>

        <p>Id     : {customer.id} </p>
        <p>Nome   : {customer.nome} </p>

        <p>Skills : {`${customer.skills}`}</p>

        <p style={{borderBottom: '1px solid #fff'}}></p>

      </div>
    );

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">

          <div className="list">
            {lisCustomer.map(this.renderCustomers)}
          </div>

        </header>
      </div>
    );

  }
}

export default App;
