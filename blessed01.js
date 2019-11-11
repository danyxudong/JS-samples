// jshint esversion: 6

var blessed = require("blessed");
var screen = blessed.screen({
  title: "Blessed Screen",
  fullUnicode: true,
  dockBorders: true,
  ignoreDockContrast: true,


});

screen.key("q", function() {
  this.destroy();
  console.log("All Done!");
});

screen.render();

// console.log(blessed.screen);
