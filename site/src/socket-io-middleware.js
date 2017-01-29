import * as actions from './actions';
import io from 'socket.io-client';

export let socket = null;

export function chatMiddleware(store) {
  return next => action => {
    if(socket && action.type === actions.NEW_MESSAGE_SEND){
      socket.emit("message", action.message);
    } else if(socket && action.type === actions.NEW_NAME){
      socket.emit("name", action.name);
      store.dispatch(actions.newNameSend(action.name));
    } else if(socket && action.type === actions.NEW_ROOM_JOIN){
      socket.emit("joinRoom", action.room);
    } else
      return next(action);
  }
};

export function createSocket(store) {
  socket = io.connect('http://localhost', { path: '/api'});
  socket.on('connection', function (data) {
    console.log("Connected! " + JSON.stringify(data));
    var n = store.getState().name;
    if(n !== "") store.dispatch(action.newName(n));
  });
  socket.on('join', function(data) {
    store.dispatch(actions.newRoomJoinReceived(data));
  });
  socket.on('newRoomList', function(data) {
    let newObjectRoom = [];
    for(var i in data){
      if(data.hasOwnProperty(i)) newObjectRoom.push({ name: i, people: data[i] });
    }
    store.dispatch(actions.newRoomList(newObjectRoom));
  });
  socket.on('message', function(data) {
    store.dispatch(actions.newMessageReceived(data));
  });
  socket.on('new_join', function(data) {
    store.dispatch(actions.joinReceived(data));
  });
}
