const http = require('http');

// calling createserver function to create server
const server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('hey, your server is up !');
});

// creating a port to listen to
server.listen(3000, '127.0.0.1');
console.log('you are now listening to port 3000');

//nhgdfhgsehfvidghlvhsdyougvekjl bgie gidshgiu