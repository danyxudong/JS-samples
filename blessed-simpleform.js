// jshint esversion: 8

var blessed = require("blessed");
var screen = blessed.screen();

var form = blessed.form({
  parent: screen,
  keys: true,
  left: 0,
  top: 0,
  width: 30,
  height: 4,
  bg: "green",
  content: "Submit or Cancel ?"
});

screen.key("q", function () {
  process.exit(0);
});

screen.render();
