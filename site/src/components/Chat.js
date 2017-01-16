import React from 'react';
import { Col, Label } from 'react-bootstrap';

import MessageBoxContainer from './MessageBoxContainer';

function formatDateMessage(d){
  let dat = new Date(d);
  return dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
}

class Message extends React.PureComponent {
  render(){
    return <div>({formatDateMessage(this.props.mess.datetime)}) <b>{this.props.mess.sender}</b>: {this.props.mess.message}</div>;
  }
}

class Join extends React.PureComponent {
  render(){
    return <div>({formatDateMessage(this.props.mess.datetime)}) <b>{this.props.mess.sender}</b> has joined the room</div>;
  }
}

class Chat extends React.Component {
  render() {
    return (
      <Col>
        <h5>
          <Label>Name: {this.props.name}</Label>&nbsp;
          <Label>Room: {this.props.room}</Label>
        </h5>
        <div id="chatbox" className="chatbox scrollable">
          {this.props.messages.map((object, i) =>
            (object.format === "MESSAGE") ? <Message mess={object} key={i} /> : <Join mess={object} key={i} />
          )}
        </div>
        <MessageBoxContainer />
      </Col>
    );
  }
}

export default Chat;
