const moduleExports = require('./module');

const array = [1, 2, 3, 4];
console.log(moduleExports.counter(array));
console.log(moduleExports.adder(1, 2));
console.log(moduleExports.pi);
