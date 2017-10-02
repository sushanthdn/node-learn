var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var screamHandler = function () {
  console.log('I hear a scream!');
}

var shoutHandler = function () {
    console.log('I hear a shout!');
  }

//Assign the event handler to an event:
eventEmitter.on('scream', screamHandler);
eventEmitter.on('shout', shoutHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
eventEmitter.emit('shout');
