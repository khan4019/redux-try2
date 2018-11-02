import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';

//Task
//1. initally header and ProductFeed

// 2. Add Router

// 3.  Eventually router with parameter


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        <Router>
            <div>
              <Route path="/" exact component={Feed} />
              <Route path="/feed/" component={Feed} />
              <Route path="/cart/" component={Cart} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
