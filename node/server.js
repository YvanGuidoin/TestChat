var io = require('socket.io')(8080);
var redis = require('socket.io-redis');
io.adapter(redis({ host: 'redis', port: 6379 }));

io.on('connection', function(socket) {
  socket.emit('message', { hello: 'world' });
});
