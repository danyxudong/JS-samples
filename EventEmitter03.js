// jshint esversion: 6

var events = require('events');
var eventEmitter = new events.EventEmitter();

// Listener #1
var listener1 = function listener1() {
  console.log('Listener # 1 is running.');
};

// Listener #2
var listener2 = function listener2() {
  console.log('Listener # 2 is running.');
};

// Binding connection event, function is listener1
eventEmitter.addListener('connection', listener1);

// Binding connection event, function is listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log("Number of listener events: " + eventListeners);

// Execute 'connection' event
eventEmitter.emit('connection');

// Remove listener with 'listner1' function
eventEmitter.removeListener('connection', listener1);
console.log("Listener 1 not be listened");

// Execute 'connection' event again.
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log("Number of listener events: " + eventListeners);

console.log("All Done!");
