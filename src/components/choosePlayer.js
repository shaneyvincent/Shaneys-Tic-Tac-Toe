import React, { Component } from 'react';

class Player extends Component {

  handleForm(e){
    e.preventDefault();
    console.log(e.target.player.value)
  }

    render() {
       return (
         <form onSubmit={(e) => this.handleForm(e)}>
          <label>

        Player LOS
          <input type="radio" name="player" value="LOS" />
          </label>

          <label>

        Player NEGROS
          <input type="radio" name="player" value="NEGROS" />
          </label>

          <input type="submit" value="Start" />

       </form>
      )
    }
}

export default Player;
