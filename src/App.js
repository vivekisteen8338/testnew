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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.successClick.bind(this)}>Success</button>
        <p>Hiiii</p>
        <button onClick={this.doubleClick.bind(this)}>Double</button>
      </div>
    );
  }
}

export default App;
