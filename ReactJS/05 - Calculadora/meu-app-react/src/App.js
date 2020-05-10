import React, {Component} from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);

    this.n1 = this.n1.bind(this);
    this.n2 = this.n2.bind(this);

    this.state  = {
      n1: '',
      n2: '',
      error: '',
      resultado: ''
    }
  }

  resetForm(){
    this.setState({n1: '', n2: ''});
  }

  resetStateResultado(){
    this.setState({resultado: ''});
  }

  resetStateError(){
    this.setState({error: ''});
  }

  n1(event) {
    this.setState({n1: Number(event.target.value)});
  }
  n2(event) {
    this.setState({n2: Number(event.target.value)});
  }

  validate(){

    this.resetStateResultado();

    if(this.state.n1 === ""){

      this.setState({error: 'Erro : preencha o 1° número'});
      return false;
    }

    if(this.state.n2 === ""){
      
      this.setState({error: 'Erro : preencha o 2° número'});
      return false;
    }

    if(isNaN(this.state.n1) || isNaN(this.state.n2)){

      this.setState({error: 'Erro : formato inválido, somente números são permitidos'});
      return false;
    }

    return true;
  }

  adicao(){
    
    if(this.validate()){
      this.resetStateError();
      this.setState({resultado: `Adição = ${this.state.n1+this.state.n2}`});
      this.resetForm();
    }
  }

  subtracao(){
    
    if(this.validate()){
      this.resetStateError();
      this.setState({resultado: `Subtração = ${this.state.n1-this.state.n2}`});
      this.resetForm();
    }
  }

  multiplicacao(){
    if(this.validate()){
      this.resetStateError();
      this.setState({resultado: `Multiplicação = ${this.state.n1/this.state.n2}`});
      this.resetForm();
    }
  }

  divisao(){
    if(this.validate()){
      this.resetStateError();
      this.setState({resultado: `Divisão = ${this.state.n1*this.state.n2}`});
      this.resetForm();
    }
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">

          <from id="calculadora">

              <p>
                {this.state.error}
                {this.state.resultado}
              </p>

              <input type="text" name="n1" id="n1" placeholder="Informe o 1° número :" value={this.state.n1} onChange={this.n1}/>
              <input type="text" name="n2" id="n2" placeholder="Informe o 2° número :" value={this.state.n2} onChange={this.n2}/>

              <button onClick={() => this.adicao()}>+</button>
              <button onClick={() => this.subtracao()}>-</button>
              <button onClick={() => this.multiplicacao()}>/</button>
              <button onClick={() => this.divisao()}>÷</button>
    
          </from>

        </header>
      </div>
    );

  }
}

export default App;
