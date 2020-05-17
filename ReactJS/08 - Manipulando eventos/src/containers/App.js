import React, { Component } from 'react';
import mock from '../mock';
import '../App.css';


const App = () => {

  const handleClick = (e, id) => {
    alert(`Cliente selecionado foi ${id}`);
  }

  const renderCustomers = (customer, index) => {

    return (
      <div style={{ textAlign: 'left' }} key={`customer-${customer.id}`}>

        <p><button onClick={(e) => handleClick(e, customer.id)}>Deletar cliente X</button></p>

        <p>Id     : {customer.id} </p>
        <p>Nome   : {customer.nome}</p>

        <p>Skills : {`${customer.skills}`}</p>

        <p style={{ borderBottom: '1px solid #fff' }}></p>


      </div>
    );

  }


  return (
    <div className="App">
      <header className="App-header">

        <div className="list">
          {mock.map(renderCustomers)}
        </div>

      </header>
    </div>
  );


}

export default App;