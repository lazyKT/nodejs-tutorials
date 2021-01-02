
// importing Logger class from 'logger.js'
const Logger = require('./logger');

// instantiating new instance of Logger
const logger = new Logger();


// as we stated, logger extends event class
// so we can register and raise an event, using Logger instance which is logger

// we can register an event by event.addListener or event.on
// both methods takes the same args i.e; for eg. event.addListener(name: String, callback: func)
// registering and rasing a logger event
logger.on('messageLogged', event => {
  console.log('Event Raised', event);
});


logger.log('Log Message');



// import custome server
const server = require('./http');

// we can raise an server event as the server extends eventemitter
//server.addListener('connection', socket => {
//  console.log('A new connection has started ...');
//});

// start the server at port 3000
server.listen(3000);

console.log('Listening on 3000...');

