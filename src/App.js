import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Feed></Feed>
      </div>
    );
  }
}

export default App;
