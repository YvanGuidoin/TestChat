import React from 'react';
import { Col, Grid, Navbar } from 'react-bootstrap';

import ListRoomContainer from './components/ListRoomContainer';
import ChatContainer from './components/ChatContainer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Test Chat
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Toggle />
        </Navbar>
        <Grid fluid>
          <Col xs={3} md={3}>
            <ListRoomContainer />
          </Col>
          <Col xs={9} md={9}>
            <ChatContainer />
          </Col>
        </Grid>
      </div>
    );
  };
}

export default App;
