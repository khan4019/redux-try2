import React, { Component } from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducers from './reducers';
import FeedContainer from './Containers/FeedContainer';
//Task
//1. initally header and ProductFeed

// 2. Add Router

// 3.  Eventually router with parameter

// Add redux


const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
              <div>
                <Route path="/" exact component={FeedContainer} />
                <Route path="/feed/" component={FeedContainer} />
                <Route path="/cart/" component={FeedContainer} />
              </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
