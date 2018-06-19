import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array (9).fill(null),

      player: "X"
    }
  }

handleClick(index) {
  let newBoard = this.state.board
    newBoard[index] = this.state.player
  let newPlayer = this.state.player === "LOS" ? "NEGROS" : "LOS"
 this.setState({
    board: newBoard,
    player: newPlayer
 })
}

  render() {
     const Box = this.state.board.map(
       (box, index) =>
       <div className="box"
        key={index}
        onClick={(e) => this.handleClick(index)}>
        {box}
      </div>
    )
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
