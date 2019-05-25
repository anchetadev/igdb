import { React, Component } from "react";
import "./App.css";

import Game from "./components/games";
import GameNavbar from "./components/navbar";
import DashHeader from "./components/dashHeader";
import Modal from "./components/modal"

class App extends Component() {
  state = {
    modalShow: false
  };
  handleShow = () =>{
    this.setState({ show: true })
  }
  componentDidMount = () => {
    setTimeout(function() {
      this.handleShow()
    })
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="App">
        {/* add a nav bar and some content will play around with igdb api to see what kind of data comes through */}
        {/* interested in how it knows what to show for recommended games, from site it doesn't look very connected to game being 
        viewed */}

        <GameNavbar />
        <DashHeader />
        <Modal
          show={this.state.modalShow}
          onHide={modalClose}
        />
        <Game />
      </div>
    );
  }
}

export default App;
