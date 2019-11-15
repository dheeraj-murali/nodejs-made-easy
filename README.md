# NodeJs

Node.js® is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser, built on Chrome's V8 JavaScript engine.

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

> 🤔 If you just read that and have no idea what that meant, don't worry keep reading, you'll find out soon...

Node.js is a platform which allows us to run Javascript on a computer or a server. (Js was just meant to be used inside a browser environment)

### Why should I use node.js you ask ?

- node.js used Javascritp 🤩
- It is very fast (beacause V8 is fast, it is one of the fasted JS engine out there and aslo it uses non-blocking I/O model we mentioned earlier)
- Huge ecosystem (heard of npm ?)

### Before we start

This course assumes you have a basic knowledge in **Javascript**, HTML and a little bit of command line.

### Downloading and Installing

visit [nodejs.org](https://nodejs.org/en/) to download and install node js.

> Its probably best to download the LTS stable version

To check if node is installed, enter the command in you terminal.

```shell
node -v
```

---

### Creating and Running node files

Simply create _`app.js`_ file (or simply any .js file).

and put some javascript into it.

```js
console.log('Hello and welcome to your nodejs file');
```

Now, in your terminal.

```sell
cd <into .js file directory>
node <filename.js>
```

---

### How nodejs work

Node.js is a JavaScript runtime built on Chrome's **V8 JavaScript engine**.
<br>
Node.js is written in **c++** wrapping the **V8 JavaScript engine** developed by google

> V8 Javascript engine is an open-source JavaScript engine developed by The Chromium Project for Google Chrome and Chromium web browsers. It can be stand alone or embedded in to any c++ applications

Js was just meant to be used inside a browser environment
<br>
Node.js takes the js code and uses v8 to convert js code in to machine readable code

![how nodejs works](how_nodejs_works.PNG 'Logo Title Text 1')

V8 is just one part of the c++ code.
<br>
The rest of the c++ code hooks into the v8 engine to proivde other functionalites and lower level operations, like:

- reading files
- connecting to database

---

# Head first into node.js

## The Global Object

when we write js in a browser, the global object is the `window` object.
<br>
we can access properties and methords on that window object like :

- alerts
- scroll
- setTimeout
- console
- etc...

when we right js in node the global object is `Global` which also provies a lot of [properties and methords](https://nodejs.org/dist/latest-v12.x/docs/api/globals.html) like :

- ```javascript
  console.log();
  ```
- ```javascript
  setTimeout(() => {}, timeout);
  ```
- ```javascript
  setInterval(() => {}, interval);
  ```
- ```javascript
  __dirname; // fetched the currect directory
  ```
- ```javascript
  __filename; // fetched the currect directory and file name
  ```
- ```javascript
  require(); // import a file mor module
  ```
- ```javascript
  export(); // export a file mor module
  ```

---

#### Function expressions and Arrow functions [side note]

```js
//Function expression pattern are widly used throughout nodejs

// normal function statement in js

function sayHi() {
	console.log('hi');
}

sayHi();

// function expression

const sayHi = function() {
	console.log('hi');
};

sayHi();

// Arrow Functions are part of JS ES6 synthax

const sayHi = () => {
	console.log('hi');
};

sayHi();
```

---

## Modules

Modules help in code splitting and to create reusable logical code blocks, which can be called upon when we need them

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
and so, we can have as many `module.exports` properties as possible inside a given module.

Here we are adding `counter`, `adder` and `pi` as different properties to `module.exports` object.

The import(`require()`) back the object. Since we are passing each export as a property rather than an object, we ned to import the exported object and we use the `.`(dot) operator to access the properties.

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

Just like in jQuery, we can run a function on an event :

```js
// jQuery example code
element.on('click', function() {});
```

We can also create custom events to execute functions when triggered.

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

Utility module of node.js <br> One of the many things util module helps us to do is inherit functionality of objects build into node.js

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
fs.readFileSync(<'path to file'>, <'Character encoding'>)

//  this is an async methord !
fs.readFile(<'path to file'>, <'Character encoding'>, <'callBack to be fired once operation is complete'>)
```

write content to file

```js
//  this is a sync methord !
fs.writeFileSync(<'path to file'>, <'data to be written'>)

//  this is an async methord !
fs.writeFile(<'path to file'>, <'data to be written'>, <'callBack to be fired once operation is complete'>)
```

> async methords are none blocking, after they are called it will execute in a seperate thread and let the rest of the code run in background. while sync methords makes the program wait till the function is executed before continuing with the rest of the code.

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

You can also delete the created file

```js
fs.unlink('<filename>');
```

fs module can also help you create and remove Directories

```js
// make directory the sync way
fs.mkdirSync('<directory name>');

// remove directory the sync way
fs.rmdirSync('<directory name>');

// make directory the async way
fs.mkdir('<directory name>', function(err) {
	if (err) throw err;
	console.log('dir created!');
});

// remove directory the async way
fs.rmdir('<directory name>', function(err) {
	if (err) throw err;
	console.log('dir removed!');
});
```

> make sure that you always have a callback function as a second parameter to every async methord

> You can not remove a directory without removing its contents first. use `fs.unlnik()` for first remove all the files before removing the directory.

# Client and Server

![how client and server works](client-server.PNG 'client server')

When we browse a website in a browser, we might need to get some data, at that point the broswer(client) will send a request to the server and the server will process the request and sends a response back, on reciving the response the browser(client) may update what we see, to show us the data.

### How do they communicate with each other ?

Client and server communicates using `Protocols`.

Protocols, are sets of rules which both client and server agree upon when communicating.

Each computer on the Internet can be identified using an IP address. So, if a client (a computer) want to communicate with a server (which is another computer) they it would first need to create a connection to the IP address. While connecting, It would open up, what's known as a socket between two computers, which is bacically a channel between two computers.

Information is send through this channel, this information is structured using a protocol like:

> these are used to structure data that needs to be send

- HTTP (Hypertext Transfer Protocol)
- FTP (File Transfer Protocol)

Once the data structure has been decided, the information is send to the the other computer via another protocol like `TCP` (Transfer Control Protocol)

What `TCP` does is take the structured information created using protocols like HTTP and TCP and split it down to smaller chunks, the small chunks are called `Packets`

> All these are build into our computers and Nodejs give us a was to access these functionalities and then send and recieve information

### Ports

Ports help us to target information to a specific program in the server.

```js
192.68.28.16:8000

// the parts before : is the IP address and the part (8000) after : is the Port number.
// every IP address can have multiple ports
```

When we send a request to the server, how can we tell that, that information is meant for nodejs and not some other program runnig in the server ? <br> Every program running in the server listens to a specific port, if a request comes to that port, the program it would respond otherwise it won't.

### Headers

When we make a request or get a response, along with the data we requested or the data we get back, there are some additional information that needs to be added, about the request/response like:

- content type
- Status

# Creating a server

We can create a server using nodejs built in HTTP module

## HTTP Module

```js
const http = require('http');

// calling createserver function to create server
// createServer takes callback function
// this callback function takes 2 values rquest and resonse
const server = http.createServer(function(req, res) {
	// we can create a response header by:
	// writeHead takes 2 values first one is status, 2nd is an object
	// This object containes deatils like Content-Type
	res.writeHead(status, { 'Content-Type': '<type of content>' });
	// after creating a header we need to end the response and send it to the browser
	res.end('message');
});

// Now that we have created a response, we need to create a port for the server to listen to
server.listern(portnumber, 'IP address');
```

You can view the headers and contents we sen by visiting the network tab in your browser.

---
