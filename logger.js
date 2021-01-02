// creating an event instance
const EventEmitter = require('events');

const url = 'http://mylogger.io/log';


// a derived class extending EventEmiiter Main Class
class Logger extends EventEmitter {

  // log method of 'Logger' class
  log(message) {
  
    console.log(message);
    // rasing an event. 'this' refers to the logger class itself
    this.emit('messageLogged', { id: 1, url });
  }

}
// exporting Logger class to global scope
module.exports = Logger;
