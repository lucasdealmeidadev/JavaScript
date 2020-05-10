import React from 'react';
import './App.css';
import Button from './button';

function sum(n1, n2){
    alert(n1+n2);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button onClick={()=> sum(10, 20)} name="Lucas de Almeida Monteiro"/>
        </p>
      </header>
    </div>
  );
}

export default App;
