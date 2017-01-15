import React from 'react';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

class NameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.close = this.close.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  close(e) {
    e.preventDefault();
    if(this.getValidationState() === 'success')
      this.props.nameChange(this.state.nameText);
  }

  handleChange(e) {
    this.setState({ nameText: e.target.value });
  }

  getValidationState() {
    const length = this.state.nameText.length;
    if (length > 15) return 'error';
    else if (length > 5) return 'success';
    else if (length > 0) return 'error';
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Choose a name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.close}>
              <FormGroup validationState={this.getValidationState()}>
                <FormControl type="text" value={this.state.nameText} placeholder="Enter name" onChange={this.handleChange} />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Ok</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

NameModal.propTypes = {
  nameChange: React.PropTypes.func.isRequired,
  showModal: React.PropTypes.bool.isRequired
}

export default NameModal;
