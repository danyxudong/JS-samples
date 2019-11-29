// jshint esversion: 6

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
let m = 0;

myEmitter.on("event", () => {
  console.log(++m);
});
console.log("My normal emit:");
myEmitter.emit("event");
// Prints: 1
myEmitter.emit("event");
// Prints: 2

let n = 0;

myEmitter.once("issue", () => {
  console.log(++n);
});
console.log("My once emit:");
myEmitter.emit("issue");
// Prints: 1
myEmitter.emit("issue");
// Ignored
