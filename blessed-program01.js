// jshint esversion: 8

/*
  My Example for Blessed
*/

const blessed = require("blessed");
const program = blessed.program();

process.title = "My Example of Blessed.program()";

program.on("keypress", function(ch, key) {
  if (key.name === "q") {
    program.clear();
    process.exit(0);
  }
});

program.enableMouse();

program.move(1, 1);
program.bg("green");
program.write("Hello world", "black fg");
