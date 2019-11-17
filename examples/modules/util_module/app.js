const events = require('events');
const util = require('util');

// creating person
const Person = function(name) {
	this.name = name;
};

// attach custom event to person by inheriting event to person
// util.inherits(<objectName>, <The thing we need to inherit>)
util.inherits(Person, events.EventEmitter);

// make people
const james = new Person('james');
const john = new Person('john');

const people = [james, john];

// loop through peope array and attach custom event
people.forEach(function(person) {
	person.on('speak', function(message) {
		console.log(`${person.name} is saying ${message}`);
	});
});

// emit event for a person
james.emit('speak', 'Sup bro ?');