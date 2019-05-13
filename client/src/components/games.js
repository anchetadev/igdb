import React, { Component } from "react";
import API from "../utils/API";
// const API = require('../utils/API.js');
export default class Games extends Component {
  getGames = () => {
    console.log("getting games")
    API.getGames().then(res =>{
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getGames}>Get the games</button>
      </div>
    );
  }
}
