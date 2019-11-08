// jshint esversion: 6

const EventEmitter = require("events");

class MusicPlayer extends EventEmitter{}

let musicPlayer = new MusicPlayer();

let AudioDevice = {
  play: function(track) {
    console.log("'" + track + "' has been played.");
  },
  stop: function() {
    //
  }
};

musicPlayer.on('play', function(track) {
  this.playing = true;
  AudioDevice.play(track);
});

musicPlayer.emit('play', 'The Roots - The Fire');

setTimeout(function(){
  musicPlayer.emit('stop');
}, 1000);
