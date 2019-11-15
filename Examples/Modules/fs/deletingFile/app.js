const fs = require('fs');

//the sync way

fs.writeFileSync('writtenFile.txt', 'This data was written to file');

console.log('writtenFile.txt file created');

console.log('file will be deleted in 5 seconds');

setTimeout(() => {
	fs.unlink('writtenFile.txt', () => {
		console.log('writtenFile.txt file deleted');
	});
}, 5000);
