import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array (9).fill(null),

      player: "LOS"
    }
  }

checkWinner(){
  let winLines =
  [
    ["0","1","2" ],
    ["3","4","5" ],
    ["6","7","8" ],
    ["0","3","6" ],
    ["1","4","7" ],
    ["2","5","8" ],
    ["0","4","8" ],
    ["2","4","6" ],
  ]

for (let index = 0; index < winLines.length; index++) {
  const [a, b ,c] = winLines[index];
}

}

handleClick(index) {
  let newBoard = this.state.board
  if (this.state.board[index] === null) {
      newBoard[index] = this.state.player

      this.setState({
         board: newBoard,
         player: this.state.player === "LOS" ? "NEGROS" : "LOS"
      })
  }


  this.checkWinner()
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
