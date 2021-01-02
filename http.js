// this file export custom http module to Global Scope

// importing http modules from node builtin modules
const http = require('http');

/**
 * in fact, 'http' class extends 'events' class
 * so, we can access any events method via http
 */

// create a http server instance
// we can put callback function inside createServer() to define more 
const server = http.createServer( (req, res) => {
	
  // by this, we can start a simple http server
  // req = request. res = respond
  if (req.url === '/') {
    res.write('Hello World');
    res.end(); 
  }
  else {
    res.write('Other req');
    res.end();
  }
});


// register a http event
// server.on('http-server', callback());

module.exports = server;
