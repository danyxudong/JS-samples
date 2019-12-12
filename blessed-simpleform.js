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
  fg: "black",
  content: "Submit or Cancel ?"
});

var submit = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 10,
  top: 2,
  name: "submit",
  content: "Submit",
  style: {
    bg: "blue",
    focus: {
      bg: "red"
    },
    hover: {
      bg: "red"
    }
  }
});

var cancel = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 20,
  top: 2,
  name: "cancel",
  content: "Cancel",
  style: {
    bg: "blue",
    focus: {
      bg: "red"
    },
    hover: {
      bg: "red"
    }
  }
});

submit.on("press", function() {
  form.submit();
});

cancel.on("press", function() {
  form.reset();
});

form.on("submit", function(data) {
  form.setContent("Sumitted.");
  screen.render();
});

form.on("reset", function(data) {
  form.setContent("Canceled.");
  screen.render();
});

screen.key("q", function () {
  process.exit(0);
});

screen.render();
