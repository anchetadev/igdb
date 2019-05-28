import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "../styles/navbar.css"
class GameNavbar extends Component {
  handleModal = () => {
    this.props.showLogin()
    console.log("handle modal")
  }
  // componentDidMount() {
  //   console.log(this.props)
  // }
  render() {


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Gameventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Navbar.Text onClick = {this.handleModal}>Login or Register</Navbar.Text>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="https://www.reddit.com/r/dankmemes/" target = "_blank">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}
}
export default GameNavbar
