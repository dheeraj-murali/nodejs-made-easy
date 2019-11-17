const fs = require('fs');

//the async way

fs.readFile('file.txt', 'utf8', function(err, data) {
	console.log(data);
});

fs.writeFile('writteFile.txt', 'This data was written to file', function(err) {
	if (err) throw err;
	console.log('It is saved!');
});
