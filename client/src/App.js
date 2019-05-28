import React from "react";
import "./App.css";

import Game from "./components/games";
import GameNavbar from "./components/navbar";
import DashHeader from "./components/dashHeader";
import Modal from "./components/infoModal";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import UserModal from "./components/userModal";

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      modalShow: false,
      userModalShow: false
    };
  }

  // this will trigger an modal to popup once the user has been on the homepage for a couple seconds
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ modalShow: true });
      }.bind(this),
      5000
    );
    // console.log(this.state.modalshow)
  }
  handleUserModal = () => {
    this.setState({ userModalShow: true })
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let userModalClose = () => this.setState({ userModalShow: false });
    return (
      <div className="App">
        {/* add a nav bar and some content will play around with igdb api to see what kind of data comes through */}
        {/* interested in how it knows what to show for recommended games, from site it doesn't look very connected to game being 
        viewed */}

        <GameNavbar showLogin={this.handleUserModal}/>
        <DashHeader />

        <Modal show={this.state.modalShow} onHide={modalClose} />
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ userModalShow: true })}
          >
            Launch vertically centered modal
          </Button>

          <UserModal show={this.state.userModalShow} onHide={userModalClose} />
        </ButtonToolbar>

        <Game />
      </div>
    );
  }
}

export default App;
