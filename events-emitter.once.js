// jshint esversion: 6

const EventEmitter = require("events");
const myEE = new EventEmitter();

myEE.once("foo", () => console.log("a"));
myEE.prependOnceListener("foo", () => console.log("b"));

console.log("1st emit:");
myEE.emit("foo");
// Prints:
// b
// a
console.log("2nd emit:");
myEE.emit("foo");
