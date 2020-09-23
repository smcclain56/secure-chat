import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="App">
        <HomePage />
      </div>
    )
  }

}

export default App;
