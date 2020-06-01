// jshint esversion: 8

/**
 * A Clock using blessed
 */

process.title = "time.js";

var argv = process.argv;

console.log(~argv);

if (~argv.indexOf("-h") || ~argv.indexOf("--help")) {
  console.log("Options:");
  console.log("-s - Show seconds.");
  console.log("-n - No leading zero on hours.");
  console.log("-d - Show date box.");
  console.log("---skinny - Skinny text.");
  return process.exit(0);
}

var blessed = require("blessed");

var screen = blessed.screen({
  autoPadding: true
});

var lastTime;

var position = {};

var container = blessed.box({
  parent: screen,
  top: "center",
  left: "center",
  width: "shrink",
  height: 9,
});

//Workaround for centering shrunken box.
container.on("prerender", function() {
  var lpos = container._getCoords(true);
  if (lpos) {
    container.rleft = (screen.width - (lpos.xl - lpos.xi)) / 2 | 0;
  }
});

var date = blessed.box({
  parent: screen,
  top: 1,
  left: 1,
  width: "shrink",
  height: "shrink",
  border: {
    type: "line",
    fg: "black"
  }
});

date.hide();

var wid = ~arg.indexOf("--skinny") ? 1 : 2;

var bch = '|';
