import React from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  createRoom(e) {
    e.preventDefault();
    this.props.createJoinRoom(this.state.roomText);
    this.setState({ roomText: '' });
  }

  handleChange(e) {
    this.setState({ roomText: e.target.value });
  }

  render(){
    return (
      <Form onSubmit={this.createRoom}>
        <FormGroup>
          <ControlLabel>New room</ControlLabel>
          <FormControl type="text" placeholder="Enter room name" onChange={this.handleChange} value={this.state.roomText} />
        </FormGroup>
        <Button onClick={this.createRoom}>Add & Join</Button>
      </Form>
    )
  }
}

AddRoom.propTypes = {
  createJoinRoom: React.PropTypes.func.isRequired
}

export default AddRoom;
