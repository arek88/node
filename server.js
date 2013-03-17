var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
io.on('connection', function(){ 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
 });
server.listen(3000);

