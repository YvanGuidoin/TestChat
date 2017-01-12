import React from 'react';
import { Button, Col, Form, FormGroup, FormControl } from 'react-bootstrap';

function MessageBox(props) {
    return(
      <Col>
        <Form horizontal>
          <FormGroup>
            <Col xs={11} md={11}>
              <FormControl type="text" placeholder="Enter message" />
            </Col>
            <Col xs={1} md={1}>
              <Button className="floatRight" bsStyle="primary">Send</Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    );
}

export default MessageBox;
