import React, { Component } from 'react';

class Player extends Component {

    render() {
       return (<form>
        <label>

        Player LOS
          <input type="radio" name="player" value="LOS" />

       </form>
      )
    }
}

export default Player;
