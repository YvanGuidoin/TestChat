import * as actions from './actions'

const initialState = {
  roomList: [],
  messageList: [],
  room: "",
  name: "",
  showModal: false
}

export default function controlApp (state = initialState, action) {
  switch (action.type) {
    case actions.NEW_MESSAGE_RECEIVED:
      return Object.assign({}, state, {
        messageList: [
          ...state.messageList,
          action.message
        ]
      })
    case actions.NEW_ROOM_LIST:
      return Object.assign({}, state, {
        roomList: action.roomList
      })
    case actions.NEW_JOIN:
      return Object.assign({}, state, {
        messageList: [
          ...state.messageList,
          action.join
        ]
      })
    case actions.NEW_ROOM_JOIN_RECEIVED:
      return Object.assign({}, state, {
        room: action.room
      })
    case actions.NEW_NAME_SEND:
      return Object.assign({}, state, {
        name: action.name
      })
    case actions.SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: action.show
      })
    default:
      return state;
  }
}
