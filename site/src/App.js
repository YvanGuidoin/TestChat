import React from 'react';
import { Col, Grid, Navbar } from 'react-bootstrap';

import ListRoomContainer from './components/ListRoomContainer';
import ChatContainer from './components/ChatContainer';
import NameModal from './components/NameModal';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    if(this.props.name === "") {
      console.log("Modal needed!");
      this.props.modalOpen();
    }
  }

  render(){
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
        <NameModal showModal={this.props.show} nameChange={this.props.nameChange} />
        <Grid fluid>
          <Col xs={3} md={3}>
            <ListRoomContainer />
          </Col>
          <Col xs={9} md={9}>
            <ChatContainer />
          </Col>
        </Grid>
      </div>
    )
  }
}

export default App;
