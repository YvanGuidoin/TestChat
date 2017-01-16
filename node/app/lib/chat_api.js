function logEvent(name_event, data, socket){
  console.log("new " + name_event + " recu: " + JSON.stringify(data) + " de: " + socket.username + " in room: " + socket.room);
}

module.exports = (io) => {
  var rooms = {
    "lobby": 0
  };

  function join(room){
    if(rooms[room]) rooms[room] = rooms[room] + 1;
    else rooms[room] = 1;
    io.emit("newRoomList", rooms);
  }

  function leave(room){
    rooms[room] = rooms[room] - 1;
    if(rooms[room] < 1){
      if(room !== "lobby") delete rooms[room];
      else rooms["lobby"] = 0;
    }
    io.emit("newRoomList", rooms);
  }

  io.on('connection', (socket) => {
    socket.emit('connection', {});
    socket.room = "lobby";
    socket.join("lobby");
    socket.emit('join', "lobby");
    join("lobby");

    socket.on('name', (data) => socket.username = data);

    socket.on('message', (data) => {
      logEvent("message", data, socket);
      io.in(socket.room).emit('message', { format: "MESSAGE", datetime: new Date(), sender: socket.username, message: data });
    });

    socket.on('joinRoom', (data) => {
      logEvent("joinRoom", data, socket);
      socket.leave(socket.room);
      leave(socket.room);
      socket.join(data);
      join(data);
      socket.room = data;
      socket.emit('join', data);
      io.in(socket.room).emit('new_join', { format: "JOIN", datetime: new Date(), sender: socket.username });
    });

    socket.on('disconnect', () => {
      logEvent("disconnect", {}, socket);
      leave(socket.room);
    });

  });
}
