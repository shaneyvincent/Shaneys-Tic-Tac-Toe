import React, { Component } from 'react';

class Player extends Component {

    render() {
       return (
         <form>
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
