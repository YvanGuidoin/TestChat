// Actions types

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const NEW_ROOM_LIST = 'NEW_ROOM_LIST';
export const NEW_JOIN = 'NEW_JOIN';
export const NEW_ROOM = 'NEW_ROOM';

// Action creators
export function addNewMessage(message) {
  return { type: NEW_MESSAGE, message };
}

export function updateRoomList(roomList) {
  return { type: NEW_ROOM_LIST, roomList };
}

export function addNewJoin(join) {
  return { type: NEW_JOIN, join };
}

export function newRoom(room) {
  return { type: NEW_ROOM, room };
}
