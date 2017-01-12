import { NEW_MESSAGE, NEW_ROOM_LIST, NEW_JOIN, NEW_ROOM } from './actions'

const initialState = {
  roomList: [],
  messageList: [],
  room: ""
}

export default function controlApp (state = initialState, action) {
  switch (action.type) {
    case NEW_MESSAGE:
      return Object.assign({}, state, {
        messageList: [
          ...state.messageList,
          action.message
        ]
      })
    case NEW_ROOM_LIST:
      return Object.assign({}, state, {
        roomList: action.roomList
      })
    case NEW_JOIN:
      return Object.assign({}, state, {
        messageList: [
          ...state.messageList,
          action.join
        ]
      })
    case NEW_ROOM:
      return Object.assign({}, state, {
        room: action.room
      })
    default:
      return state;
  }
}
