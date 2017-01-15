// Actions types

export const NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED';
export const NEW_MESSAGE_SEND = 'NEW_MESSAGE_SEND';
export const NEW_ROOM_LIST = 'NEW_ROOM_LIST';
export const NEW_JOIN = 'NEW_JOIN';
export const NEW_ROOM_JOIN = 'NEW_ROOM_JOIN';
export const NEW_ROOM_JOIN_RECEIVED = 'NEW_ROOM_JOIN_RECEIVED';
export const NEW_NAME_SEND = 'NEW_NAME_SEND';
export const NEW_NAME = 'NEW_NAME';
export const SHOW_MODAL = 'SHOW_MODAL';

// Action creators
export function newMessageReceived(message) {
  return { type: NEW_MESSAGE_RECEIVED, message };
}
export function newMessageSend(message) {
  return { type: NEW_MESSAGE_SEND, message };
}
export function newRoomList(roomList) {
  return { type: NEW_ROOM_LIST, roomList };
}
export function joinReceived(join) {
  return { type: NEW_JOIN, join };
}
export function newRoomJoin(room) {
  return { type: NEW_ROOM_JOIN, room };
}
export function newRoomJoinReceived(room) {
  return { type: NEW_ROOM_JOIN_RECEIVED, room };
}
export function newNameSend(name) {
  return { type: NEW_NAME_SEND, name };
}
export function newName(name) {
  return { type: NEW_NAME, name };
}
export function showModal(show) {
  return { type: SHOW_MODAL, show };
}
