/**
  Exemple de server Node.js...
*/
var io = require('socket.io')();

io.on('connection', function(client){});
io.listen(3000);
