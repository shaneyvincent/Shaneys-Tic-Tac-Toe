import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    this.state = {
      board = Array (9).fill("X")
    }
  }
  render() {
     const box = this.state.board.map(box => <div className="box">{box}</div>)
    return (
      <div className="container">
        <h1> Shaneys Tic Tac Toe App </h1>
        <div className="board">
          // <div className="box">X</div>
          // <div className="box">X</div>
          // <div className="box"></div>
          // <div className="box"></div>
          // <div className="box"></div>
          // <div className="box"></div>
          // <div className="box"></div>
          // <div className="box"></div>
          // <div className="box"></div>
        </div>
      </div>
    );
  }
}

export default App;
