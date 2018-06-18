import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board : Array (9).fill("null")
    }
  }

handleClick(e) {
  console.log(e)
}

  render() {
     const Box = this.state.board.map(box => <div className="box" key={index} onClick={this.handleClick()}>{box}</div>)
    return (
      <div className="container">
        <h1> Shaneys Tic Tac Toe App </h1>
        <div className="board">
        {Box}

        </div>
      </div>
    );
  }
}

export default App;
