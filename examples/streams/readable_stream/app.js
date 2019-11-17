var http = require('http');
// import fs module
var fs = require('fs');

// create a readable stream
var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

// set up event listener
readStream.on('data', function(chunk) {
	console.log(`new chunk `);
	console.log(chunk);
});
