import React, {Component} from 'react';
//import './App.css';
import Button from './button';

class App extends Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      clock: 1000,
      copo :'Água',
    }
  }

  alterarCopo(){
    
    let valor;

    if(this.state.copo === 'Água'){
      valor = 'Refrigerante';
    }
    else{
      valor = 'Água';
    }

    this.setState({
      copo: valor,
    });
  }

  render(){

    const {clock, copo} = this.state;

    return(

      <div>
        <h1>{clock}</h1>
        
        <Button onClick={()=>this.alterarCopo()} name={copo}/>

      </div>

    );
  }
}

export default App;
