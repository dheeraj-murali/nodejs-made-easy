const fs = require('fs');

// the sync way
// mkdir stands for make directory
fs.mkdirSync('newDir');

console.log('newDir created');
console.log('deleting newDir in 5 seconds');

setTimeout(() => {
	// the sync way
	// rmdir stands for remove directory
	fs.rmdirSync('newDir');
	console.log('newDir removed/deleted');
}, 5000);
