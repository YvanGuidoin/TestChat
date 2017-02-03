const io = require('socket.io-client');

var socket = io.connect("http://reverse", { path: "/api" });
socket.on('connection', () => {
  console.log("Connected!");
  socket.emit('name', "Bot_hello");
  socket.emit('message', "Hello everyone!");
});
socket.on('join', (data) => {
  socket.room = data;
});
socket.on('message', (data) => {
  if(data.sender.slice(0,3) !== "Bot" && data.format === "MESSAGE"){
    if(data.message.toLowerCase().includes("hello")) {
      socket.emit('message', 'hello ' + data.sender);
    }
  }
});
socket.on('disconnect', () => {});
