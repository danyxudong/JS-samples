// jshint esversion: 6

const EventEmitter = require("events");

// Declaration #1
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();

// Declaration #2
// myEmitter = new EventEmitter.EventEmitter();

// Declaration #3
myEmitter = new EventEmitter();

myEmitter.on("event", () => {
  console.log("an event occured!");
});

myEmitter.emit("event");
