import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default class modal extends Component {
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Hey there!
            </Modal.Title>
          </Modal.Header>
          {/* add logic to display random text for different modals everytime */}
          <Modal.Body>
            <p>
              The Last of Us 2 is coming out soon! Hope you're as excited as the rest of the world :o
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
