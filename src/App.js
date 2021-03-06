import React, { Component } from 'react';
import './App.css';
import Player from './components/choosePlayer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array (9).fill(null),

      player: "LOS",

      winner: null
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
  if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
    alert('while Kye Sleeps!');
    this.setState({
      winner: this.state.player
    })
  }

}


}

handleClick(index) {
  let newBoard = this.state.board
  if (this.state.board[index] === null && !this.state.winner) {
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
        <Player />
        <div className="board">
        {Box}

        </div>
      </div>
    );
  }
}

export default App;
