// jshint esversion: 6

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.once("log", () => console.log("log once"));

// Returns a new Array with a function `onceWrapper` (created by 'once') which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on("log", () => console.log("log persistently"));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners("log");

// Logs "Log persistently" twice
newListeners[0]();
emitter.emit("log");


// console.log(listeners[0].listener());
