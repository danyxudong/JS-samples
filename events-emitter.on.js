//jshint esversion: 6

const EventEmitter = require("events");
const myEE = new EventEmitter();

myEE.on("foo", () => console.log("a"));
myEE.prependListener("foo", () => console.log("b"));

myEE.emit("foo");
// Prints:
// b
// a
