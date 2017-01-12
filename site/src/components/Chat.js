import React from 'react';
import { Col } from 'react-bootstrap';

import MessageBox from './MessageBox';

function formatDateMessage(d){
  let dat = new Date(d);
  return dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
}

function Message(props) {
    return <div>({formatDateMessage(props.mess.datetime)}) {props.mess.sender}: {props.mess.message}</div>;
}

function Join(props) {
    return <div>({formatDateMessage(props.mess.datetime)}) {props.mess.sender} has joined the room</div>;
}

function Chat(props) {
    return (
      <Col>
        <div id="chatbox" className="chatbox scrollable">
          {props.messages.map((object, i) =>
            (object.format === "MESSAGE") ? <Message mess={object} key={i} /> : <Join mess={object} key={i} />
          )}
        </div>
        <MessageBox />
      </Col>
    )
}

export default Chat;
