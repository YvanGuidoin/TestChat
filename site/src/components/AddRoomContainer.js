import { connect } from 'react-redux';

import { newRoomJoin } from '../actions';
import AddRoom from './AddRoom';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createJoinRoom: (room) => dispatch(newRoomJoin(room))
  }
}

const AddRoomContainer = connect(mapStateToProps, mapDispatchToProps)(AddRoom);

export default AddRoomContainer;
