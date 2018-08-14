import React, { Component } from 'react'
import {Button, Modal } from 'react-bootstrap'


class ActModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleHide() {
      this.setState({ show: false });
    }
    render() {
      console.log('props in modal', this.props)
      return (
        <div className="modal-container" style={{ height: 200 }}>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
           Submit
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to submit?
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" onClick={this.props.handleSubmit}>Submit</Button>
              <Button onClick={this.phandleHide}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default ActModal;