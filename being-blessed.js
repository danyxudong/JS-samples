// jshint esversion: 6

// Initializing
var blessed = require("blessed");
var fs = require("fs");
var screen = blessed.screen({
  smartCSR: true
});

// Adding events
screen.key("q", function () {
  this.destroy();
  console.log("Existed!");
});


// Adding elements
var box = blessed.box({
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  content: "Hello {bold}world{/bold}!",
  tags: true,
  border: {
    type: "line"
  },
  style: {
    fg: "white",
    bg: "magenta",
    border: {
      fg: "#f0f0f0"
    },
    hover: {
      bg: 'green'
    }
  }
});

// var box = blessed.box({
//   top: "center",
//   left: "center",
//   width: "60%",
//   height: "80%",
//   tags: true,
//   style: {fg: "white", bg: "blue"}
// });


screen.append(box);

fs.readFile("./package.json", {encoding: 'utf8'}, function(err, data) {
  box.setText(data);
  screen.render();
});

screen.render();
