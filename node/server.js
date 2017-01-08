const app = require('http').createServer(alive);
const io = require('socket.io')(app, { path: '/api'});
const redis = require('socket.io-redis');
io.adapter(redis({ host: 'redis', port: 6379 }));

app.listen(80);

function alive (req, res) {
  res.status(200).end('Alive');
}

io.on('connection', (socket) => socket.emit('message', { hello: 'world' }));
