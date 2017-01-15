const STATE_TEMP = {
  roomList: [
    { name: "lobby", people: 1},
    { name: "help", people: 21},
    { name: "monster", people: 32},
    { name: "fun", people: 44},
    { name: "test", people: 8}
  ],
  messageList: [
    { format: "MESSAGE", datetime: "2014-08-20 15:30:00", sender: "Sender1", message: "Hello" },
    { format: "JOIN", datetime: "2014-08-20 15:30:06", sender: "Sender1" }],
  room: "",
  name: "",
  showModal: false
};

export default STATE_TEMP;
