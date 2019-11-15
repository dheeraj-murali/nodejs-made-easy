const counter = function(array) {
	return `There are ${array.length} elements in this array `;
};

const adder = function(a, b) {
	return `The sum of two numbers is ${a + b}`;
};

const pi = 3.14;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
