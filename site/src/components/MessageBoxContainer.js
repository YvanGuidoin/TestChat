import { connect } from 'react-redux';

import { newMessageSend } from '../actions';
import MessageBox from './MessageBox';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(newMessageSend(message));
    }
  }
}

const MessageBoxContainer = connect(mapStateToProps, mapDispatchToProps)(MessageBox);

export default MessageBoxContainer;
