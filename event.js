// jshint esversion: 6

//event.js 文件
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
// var exec = require('child_process').exec;

event.on('some_event', function() {
    console.log('some_event 事件触发');
});
setTimeout(function() {
    event.emit('some_event');
}, 1000);

// child = exec('node test2.js {{args}}',
//   function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//       console.log('exec error: ' + error);
//     }
// });
