import React from 'react';
import { Button, Col, Grid, ListGroup, ListGroupItem, Badge, Form, FormGroup, ControlLabel, FormControl, Navbar, Panel } from 'react-bootstrap';

import './App.css';

class AddRoom extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <ControlLabel>New room</ControlLabel>
          <FormControl type="text" placeholder="Enter room name" />
        </FormGroup>
        <Button>Add & Join</Button>
      </Form>
    );
  };
}

class ListRoom extends React.Component {
  rooms = [
    { name: "base", people: 1},
    { name: "help", people: 21},
    { name: "monster", people: 32},
    { name: "fun", people: 44}
  ];
  render() {
    return(
      <Panel collapsible defaultExpanded header="Rooms">
        <ListGroup fill className="scrollable">
          {this.rooms.map((object, i) =>
            <ListGroupItem key={i}>{object.name} <Badge>{object.people}</Badge></ListGroupItem>
          )}
        </ListGroup>
        <AddRoom />
      </Panel>
    );
  };
}

class MessageBox extends React.Component {
  render() {
    return(
      <Col id="messagebox">
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
}

class Message extends React.Component {
  formatDateMessage(d){
    let dat = new Date(d);
    return dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
  };
  render(){
    return <div>({this.formatDateMessage(this.props.mess.datetime)}) {this.props.mess.sender}: {this.props.mess.message}</div>;
  };
}

class Chat extends React.Component {
  messages= [
    { datetime: "2014-08-20 15:30:00", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:01", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:02", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:03", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:04", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:05", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:06", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:07", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:08", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:09", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:10", sender: "Sender1", message: "Hello" },
    { datetime: "2014-08-20 15:30:11", sender: "Sender1", message: "Hello" },
  ];
  render() {
    return (
      <Col id="container">
        <div id="chatbox" className="chatbox scrollable">
          {this.messages.map((object, i) =>
            <Message mess={object} key={i} />
          )}
        </div>
        <MessageBox />
      </Col>
    );
  };
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar id="nav">
          <Navbar.Header>
            <Navbar.Brand>
              Test Chat
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Toggle />
        </Navbar>
        <Grid fluid>
          <Col xs={3} md={3}>
            <ListRoom />
          </Col>
          <Col xs={9} md={9}>
            <Chat />
          </Col>
        </Grid>
      </div>
    );
  };
}

export default App;
