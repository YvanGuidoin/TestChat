import React from 'react';
import { Button, Col, Form, FormGroup, FormControl } from 'react-bootstrap';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.message = this.message.bind(this);
  }

  handleChange(e) {
    this.setState({ messageText: e.target.value });
  }

  message(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.messageText);
    this.setState({ messageText: '' });
  }

  render() {
    return(
      <Col>
        <Form horizontal onSubmit={this.message}>
          <FormGroup>
            <Col xs={11} md={11}>
              <FormControl type="text" placeholder="Enter message" onChange={this.handleChange} value={this.state.messageText} />
            </Col>
            <Col xs={1} md={1}>
              <Button className="floatRight" bsStyle="primary" onClick={this.message}>Send</Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    )
  }
}

MessageBox.propTypes = {
  sendMessage: React.PropTypes.func.isRequired
}

export default MessageBox;
