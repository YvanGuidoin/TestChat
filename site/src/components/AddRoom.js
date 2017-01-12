import React from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function AddRoom (props) {
    return (
      <Form>
        <FormGroup>
          <ControlLabel>New room</ControlLabel>
          <FormControl type="text" placeholder="Enter room name" />
        </FormGroup>
        <Button>Add & Join</Button>
      </Form>
    )
}

export default AddRoom;
