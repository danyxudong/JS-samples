// jshint esversion: 6

const EventEmitter = require("events");
const server = new EventEmitter();

server.on("connection", (stream) => {
  console.log("someone connected!");
});
console.log(server.listeners("connection"));
// Prints: [ [Function] ]
