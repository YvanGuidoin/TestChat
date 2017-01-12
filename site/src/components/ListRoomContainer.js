import { connect } from 'react-redux';

import ListRoom from './ListRoom';

const mapStateToProps = (state) => {
  return {
    rooms: state.roomList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ListRoomContainer = connect(mapStateToProps, mapDispatchToProps)(ListRoom);

export default ListRoomContainer;
