var http = require('http');
// import fs module
var fs = require('fs');

// create a readable stream
var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// create a writable stream
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');

// set up event listener
readStream.on('data', function(chunk) {
	console.log(`new chunk `);
	// call write methord to write the data to the file
	writeStream.write(chunk);
});
