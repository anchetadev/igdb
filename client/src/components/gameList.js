import React, { Component } from "react";

export default class gameList extends Component {
  render() {
    const gameElems = this.props.stategames.map((game, index) => (
      <li key={index}>{game.name}</li>
    ));
    return (
      <div>
        <ul>{gameElems}</ul>
      </div>
    );
  }
}
