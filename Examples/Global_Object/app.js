require('events'); // import a file or module (events is not used in this example )

// logs output to console
console.log('console is a global');

setTimeout(() => {
	console.log('run after 3 seconds');
}, 3000);

setInterval(() => {
	console.log('run at every 2 seconds (press Ctrl + c to exit)');
}, 2000);

console.log('file directory is : ' + __dirname); // fetched the currect directory

console.log('file directory and name is : ' + __filename); // fetched the currect directory and file name

//exports(); // export a file mor module
