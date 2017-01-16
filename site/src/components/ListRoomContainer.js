import { connect } from 'react-redux';

import { newRoomJoin } from '../actions'
import ListRoom from './ListRoom';

const mapStateToProps = (state) => {
  return {
    rooms: state.roomList,
    room: state.room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    joinRoom: (room) => {dispatch(newRoomJoin(room))}
  }
}

const ListRoomContainer = connect(mapStateToProps, mapDispatchToProps)(ListRoom);

export default ListRoomContainer;
