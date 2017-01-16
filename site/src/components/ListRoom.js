import React from 'react';
import { ListGroup, ListGroupItem, Badge, Panel } from 'react-bootstrap';

import AddRoomContainer from './AddRoomContainer';

class ListRoom extends React.Component {
  constructor(props) {
    super(props);
    this.clickJoinRoom = this.clickJoinRoom.bind(this);
  }

  clickJoinRoom(room){
    if(this.props.room!==room) this.props.joinRoom(room);
  }

  render(){
    return(
      <Panel collapsible defaultExpanded header="Rooms">
        <ListGroup fill className="scrollable">
          {this.props.rooms.map((object, i) =>
            <ListGroupItem onClick={() => this.clickJoinRoom(object.name)} active={this.props.room===object.name} key={i}>{object.name} <Badge>{object.people}</Badge></ListGroupItem>
          )}
        </ListGroup>
        <AddRoomContainer />
      </Panel>
    )
  }
}

ListRoom.propTypes = {
  joinRoom: React.PropTypes.func.isRequired,
  rooms: React.PropTypes.array.isRequired,
  room: React.PropTypes.string.isRequired
}

export default ListRoom;
