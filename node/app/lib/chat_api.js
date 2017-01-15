module.exports = (io) => {
  var rooms = ['lobby'];

  io.on('connection', (socket) => {
    socket.emit('connection', { hello: 'world' });
    socket.room = 'lobby';
    socket.join('lobby');
    socket.emit('join', 'lobby');

    socket.on('name', (data) => socket.username = data.name);

    socket.on('message', (data) => {
      console.log("new message recu: " + JSON.stringify(data));
      io.in(socket.room).emit('message', { format: "MESSAGE", datetime: new Date(), sender: socket.username, message: data });
    });

    socket.on('join', (data) => {
      if(socket.room) socket.leave(socket.room);
      socket.join(data.newRoom);
      if(rooms.indexOf(data.newRoom) == -1) rooms.push(data.newRoom);
      socket.room = data.newRoom;
      socket.emit('join', data.newRoom);
      console.log(socket.username + " has joined " + data.newRoom);
      socket.broadcast.to(data.newRoom).emit('new_join', data.name);
    });

    socket.on('disconnect', () => {
      console.log("Socket " + socket.username + " has quit.")
    });

  });

  console.log("Contenu:\n" + JSON.stringify(io.sockets.adapter.rooms));
}
