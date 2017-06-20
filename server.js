"use strict";

const SERVER_DIR = 'www';

var connect = require('connect');
var serveStatic = require('serve-static');
var pPort = process.env['testPort'] || 8000;

connect().use(serveStatic(SERVER_DIR)).listen(8000, () => {
	console.log('Starting server on port ' + pPort)
});

