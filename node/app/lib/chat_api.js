const HASH_ROOMS = "HASH_TO_MANAGE_ROOMS";
var LOG_NODE_EVENT_SOCKET = process.env.LOG_NODE_EVENT_SOCKET;

function logEvent(name_event, data, socket){
  if(LOG_NODE_EVENT_SOCKET === "DEV") console.log("new "+name_event+" recu: "+JSON.stringify(data)+" de: "+socket.username+" in room: "+socket.room);
}

module.exports = (io, client, redis) => {

  function sendNewRoomList(err, res){
    if(err) console.log("Erreur Redis: " + JSON.stringify(err));
    else client.hgetall(HASH_ROOMS, (err, obj) => {
      if(LOG_NODE_EVENT_SOCKET === "DEV") console.log("New rooms: " + JSON.stringify(obj));
      io.emit("newRoomList", obj);
    });
  }

  // init room lobby to 0 if no node has already initialized it
  client.hmget(HASH_ROOMS, "lobby", (err, obj) => {
    if(obj[0] == null){
      client.hmset(HASH_ROOMS, "lobby", 0, sendNewRoomList);
    }
  });

  function join(room){
    // initialize if no room already, or increment it
    client.hmget(HASH_ROOMS, room, (err, obj) => {
      if(obj[0] == null){
        client.hmset(HASH_ROOMS, room, 1, sendNewRoomList);
      } else {
        client.hincrby(HASH_ROOMS, room, 1, sendNewRoomList);
      }
    });
  }

  function leave(room){
    // decrement if room already, except for the lobby
    client.hmget(HASH_ROOMS, room, (err, obj) => {
      if(obj[0] != null){
        if(obj[0] > 1){
          client.hincrby(HASH_ROOMS, room, -1, sendNewRoomList);
        } else {
          if(room !== "lobby") client.hdel(HASH_ROOMS, room, sendNewRoomList);
          else client.hmset(HASH_ROOMS, "lobby", 0, sendNewRoomList);
        }
      }
    });
  }

  io.sockets.on('connection', (socket) => {
    logEvent("connection", {}, socket);
    socket.emit('connection', {});
    socket.room = "lobby";
    socket.join("lobby");
    socket.emit('join', "lobby");
    join("lobby");

    socket.on('name', (username) => socket.username = username);

    socket.on('message', (msg) => {
      logEvent("message", msg, socket);
      io.in(socket.room).emit('message', {
        format: "MESSAGE",
        datetime: new Date(),
        sender: socket.username,
        message: msg
      });
    });

    socket.on('joinRoom', (data) => {
      logEvent("joinRoom", data, socket);
      socket.leave(socket.room);
      leave(socket.room);
      socket.room = data;
      socket.join(socket.room);
      join(socket.room);
      socket.emit('join', socket.room);
      io.in(socket.room).emit('new_join', {
        format: "JOIN",
        datetime: new Date(),
        sender: socket.username
      });
    });

    socket.on('disconnect', () => {
      logEvent("disconnect", {}, socket);
      leave(socket.room);
    });

  });
}
