# NodeJs

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Downloading and Installing

visit [nodejs.org](https://nodejs.org/en/) to download and install node js.

check if node is istalled

```shell
node -v
```

---

### Creating and Running node files

Simply create _`app.js`_ file (or any .js file)

```sell
cd <into .js file directory>
node <filename>
```

---

### How nodejs work

Node.js is a JavaScript runtime built on Chrome's **V8 JavaScript engine**.
<br>
Node.js is written in **c++** so a the **V8 JavaScript engine** developed by google

> V8 Javascript engine is an open-source JavaScript engine developed by The Chromium Project for Google Chrome and Chromium web browsers. It can be stand alone or embedded in to any c++ applications

![how nodejs works](how_nodejs_works.png 'Logo Title Text 1')

Initially js was just ment to be used inside a browser environment
<br>
Node.js written in c++ takes js code and uses v8 to convert js code in to machine readable code

V8 is just one part of the c++ code.
<br>
The rest of it hooks into the v8 engine to proivde other functionalites like lower level operations, like:

-   reading files
-   connecting to database

---

# Head first into node.js

## The Global Object

when we write js in a browser, the global object is the `window` object.
<br>
we can access properties and methords on that window object like :

-   alerts
-   scroll
-   setTimeout
-   console
-   etc...

when we right js in node the global object is `Global` which also provies a lot of [properties and methords](https://nodejs.org/dist/latest-v12.x/docs/api/globals.html) like :

-   ```javascript
    console.log();
    ```
-   ```javascript
    setTimeout(() => {}, timeout);
    ```
-   ```javascript
    setInterval(() => {}, interval);
    ```
-   ```javascript
    __dirname; // fetched the currect directory
    ```
-   ```javascript
    __filename; // fetched the currect directory and file name
    ```
-   ```javascript
    require(); // import a file mor module
    ```
-   ```javascript
    export(); // export a file mor module
    ```

---

#### Function expressions [side note]

```js
//Function expression pattern are widly used throughout nodejs

// normal function statement in js

function sayHi() {
	console.log('hi');
}

sayHi();

// function expression

const sayHi =  function () {
    console.log('hi);
}

sayHi();
```

---

## Modules

Modules help in code splitting and to create reusable logical code blocks, which can be called upon those modules when we need them

```js
// Sample module
//**************

// countModule.js
const counter = function(array) {
	return `There are ${array.length} elements in this array `;
};

module.exports = counter;

//app.js
const count = require('./countModule');

const array = [1, 2, 3, 4];
console.log(count(array));
```

when we create a module we need to explicity say which part of the module we need to export from the module file using `module.exports = <module name>`
<br>
and once exported from the module file we can use `require('<path to module file>')` to import the exported module

When we are importing(`require()`) a module, we are calling `modules.exports` from the imported module and it will return all exports it contains
<br>
and hence we need to save the import into a variable _to be able to use it_.

### Module patters

```js
//module.js
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

//----------------------------

//app.js
const moduleExports = require('./module');

const array = [1, 2, 3, 4];
console.log(moduleExports.counter(array));
console.log(moduleExports.adder(1, 2));
console.log(moduleExports.pi);
```

`module.exports` is just an empty object.
we can add new properties to it like `module.exports.<propertyName>`,
and so, we can have as many `module.exports` properties as possible in side a given module

Here we are adding `counter`, `adder` and `pi` as different properties to `module.exports` object.

The import(`require()`) however gets back only one object, since we are passing each export as a property rather than an object. So we import the exported object and we use the `.`(dot) operator to access the properties.

As a short hand, we can also write the exports as shown bellow, directly at the function, rather than in multiple lines.

```js
//module.js
module.exports.counter = function(array) {
	return `There are ${array.length} elements in this array `;
};

module.exports.adder = function(a, b) {
	return `The sum of two numbers is ${a + b}`;
};

module.exports.pi = 3.14;
```

or export them as a single object

```js
//module.js
const counter = function(array) {
	return `There are ${array.length} elements in this array `;
};

const adder = function(a, b) {
	return `The sum of two numbers is ${a + b}`;
};

const pi = 3.14;

module.exports = {
	counter,
	adder,
	pi,
};
```

---

## Event Module

Although we can create custom modules, node.js ships with some built in modules (core module), which we can use in our applications

when we are importing a core module we only need to provde the name of the module and not the path to it.

```js
//app.js
const events = require('events');
```

The [node.js documentataion](https://nodejs.org/dist/latest-v12.x/docs/api/events.html) provides details on all the properties the events module returns.

Just like in jQuery, running a function on an event :

```js
// jQuery example code
element.on('click', function() {});
```

We can create custom function to be executed when our custom event is triggered

```js
const events = require('events');

// creating custom event emitter
const myEmitter = new events.EventEmitter();

// creating custom event
myEmitter.on('customEvent', function(message) {
	console.log(message);
});

// trigerring custom event
myEmitter.emit('customEvent', '<event function message>');
```

---

## Util Module

Utility module of node.js <br> One of the thing util module helps us to do is inherit functionality of objects build into node.js

```js
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
```

---

## fs Module

Used for reading and writing files and other things.

```js
const fs = require('fs');
```

to read a file use

```js
//  this is a sync methord !
fs.readFileSync(<'path to file'>, <'Character encoding'>);

//  this is an async methord !
fs.readFile(<'path to file'>, <'Character encoding'>, <'callBack to be fired once operation is complete'>);
```

write content to file

```js
//  this is a sync methord !
fs.writeFileSync(<'path to file'>, <'data to be written'>);

//  this is an async methord !
fs.writeFile(<'path to file'>, <'data to be written'>, <'callBack to be fired once operation is complete'>);
```

reding and writing in files

```js
const fs = require('fs');

//the sync way

const fileData = fs.readFileSync('file.txt', 'utf8');

console.log(fileData);

fs.writeFileSync('writteFile.txt', 'This data was written to file');

//the async way

fs.readFile('file.txt', 'utf8', function(err, data) {
	console.log(data);
});

fs.writeFile('writteFile.txt', 'This data was written to file', function(err) {
	if (err) throw err;
	console.log('It is saved!');
});
```
