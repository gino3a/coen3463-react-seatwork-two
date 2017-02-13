import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

class App extends Component {
  state = {
    name: ''
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Seatwork</h2>
        </div>
        <p className="App-intro">
          <TodoList />
        </p>
      </div>
    );
  }
}

export default App;
