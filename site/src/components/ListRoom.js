import React from 'react';
import { ListGroup, ListGroupItem, Badge, Panel } from 'react-bootstrap';

import AddRoom from './AddRoom';

function ListRoom (props) {
    return(
      <Panel collapsible defaultExpanded header="Rooms">
        <ListGroup fill className="scrollable">
          {props.rooms.map((object, i) =>
            <ListGroupItem key={i}>{object.name} <Badge>{object.people}</Badge></ListGroupItem>
          )}
        </ListGroup>
        <AddRoom />
      </Panel>
    )
}

export default ListRoom;
