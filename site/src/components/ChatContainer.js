import { connect } from 'react-redux';

import Chat from './Chat';

const mapStateToProps = (state) => {
  return {
    messages: state.messageList,
    name: state.name,
    room: state.room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
