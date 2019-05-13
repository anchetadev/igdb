import React, { Component } from "react";
import API from "../utils/API";
import GameList from "./gameList";
// const API = require('../utils/API.js');
export default class Games extends Component {
  state = {
    games: [],
  };

  getGames = () => {
    console.log("getting games");
    API.getGames().then(res => {
      this.setState({
        games: res.data
      })
      console.log(this.state.games)
    });
  };
  componentDidMount(){
    this.getGames()
  }
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        {this.state.games.length >0 ?
        <GameList stategames={this.state.games}/> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}
