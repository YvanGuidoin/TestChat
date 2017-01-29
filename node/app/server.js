const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, { path: '/api'});
const socket_redis = require('socket.io-redis');

const redis = require("redis");
const client = redis.createClient({
  host: 'redis',
  port: 6379
});

io.adapter(socket_redis({
  host: 'redis',
  port: 6379
}));

const chat_api = require('./lib/chat_api.js')(io, client, redis);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, res) => {
  res.status(200).send('Alive');
});

server.listen(8080, () => console.log("Running"));
