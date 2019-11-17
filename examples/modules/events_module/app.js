const events = require('events');

// creating custom event emitter
const myEmitter = new events.EventEmitter();

// creating custom event
myEmitter.on('customEvent', function(message) {
	console.log(message);
});

// trigerring custom event
myEmitter.emit('customEvent', 'Your custom event triggered');