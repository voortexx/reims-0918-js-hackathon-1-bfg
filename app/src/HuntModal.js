import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class HuntModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
          Visit It !
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            How to use the #Wall ?
          </ModalHeader>
          <ModalBody>
            <p>
              Enter your tag in the search bar and click <strong>Start</strong>{" "}
              or press <strong>Enter</strong> to launch the wall{" "}
            </p>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
}

export default HuntModal;
