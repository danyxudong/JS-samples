// jshint esversion: 6

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", function(a, b) {
  console.log("Print 1 with function(a, b):");
  console.log(a, b, this, this === myEmitter);
  // Prints:
  // a b MyEmitter {
  //   domain: null,
  //   _events: { event: [Function] },
  //   _eventsCount: 1,
  //   _maxListeners: undefined } true
});
myEmitter.emit("event", "a", "b");

myEmitter.on("issue", (a, b) => {
  console.log("Print 2 with () => :");
  console.log(a, b, this);
  // Prints:
  // a b {}
});
myEmitter.emit("issue", "a", "b");
