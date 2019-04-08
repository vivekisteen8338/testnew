import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  
successClick(){
  window.postMessage("https://www.myntra.com/kurtas","*")
}

doubleClick(){
  window.postMessage("https://www.myntra.com/ss-19","*")
}
  render() {
    return (
      <div className="App">
        <button onClick={this.successClick.bind(this)}>Success</button>
        <p>Hiiii</p>
        <button onClick={this.doubleClick.bind(this)}>Double</button>
      </div>
    );
  }
}

export default App;
