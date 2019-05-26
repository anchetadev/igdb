import { React, Component } from "react";
import "./App.css";

import Game from "./components/games";
import GameNavbar from "./components/navbar";
import DashHeader from "./components/dashHeader";
import Modal from "./components/modal";
import Button from "react-bootstrap/Button"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"

class App extends Component() {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }
  handleShow = () =>{
    this.setState({ show: true })
  }
  // this will trigger an modal to popup once the user has been on the homepage for a couple seconds
  // componentDidMount = () => {
  //   setTimeout(function() {
  //     this.handleShow()
  //   })
  // }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="App">
        {/* add a nav bar and some content will play around with igdb api to see what kind of data comes through */}
        {/* interested in how it knows what to show for recommended games, from site it doesn't look very connected to game being 
        viewed */}

        <GameNavbar />
        <DashHeader />
        <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <Modal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
        <Game />
      </div>
    );
  }
}

export default App;
