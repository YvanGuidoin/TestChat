const app = require('http').createServer(alive);
const io = require('socket.io')(app, { path: '/api'});
const redis = require('socket.io-redis');
io.adapter(redis({ host: 'redis', port: 6379 }));

app.listen(80);

var rooms = ['base'];

function alive (req, res) {
  res.status(200).end('Alive');
}

io.on('connection', (socket) => {
  socket.emit('connection', { hello: 'world' });
  socket.join('base');
  socket.on('message', (data) => socket.broadcast.to('base').emit(data));
  socket.on('join', (data) => {
    if(socket.room) socket.leave(socket.room);
    socket.join(data);
    socket.room = data;
    console.log(io.sockets.adapter.rooms);
  });
});
