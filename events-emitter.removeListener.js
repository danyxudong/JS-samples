// jshint esversion: 6

const EventEmitter = require("events");
const myEmitter = new EventEmitter();
const ee = new EventEmitter();

// Example 1
console.log("Example 1: .......");
const callbackA = () => {
  console.log("A");
  myEmitter.removeListener("event", callbackB);
};

const callbackB = () => {
  console.log("B");
};

myEmitter.on("event", callbackA);
myEmitter.on("event", callbackB);
console.log(myEmitter.listeners("event"));

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit("event");
console.log(myEmitter.listeners("event"));
// Prints:
// A
// B

// callbackB is removed now.
// Internal listener array [callbackA]
myEmitter.emit("event");
// Prints:
// A

// Example 2
console.log("Example 2: .......");
function pong() {
  console.log("Pong!");
}

ee.on("ping", pong);
ee.once("ping", pong);
ee.removeListener("ping", pong);

console.log("1st emit");
ee.emit("ping");
console.log("2nd emit");
ee.emit("ping");
