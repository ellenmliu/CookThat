// Packages
const path = require('path');
const fs = require('fs');
const express = require('express');

// Create app
const app = express();

// View Engine

app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

// Middleware
app.use(express.static(__dirname));

// Routes
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Error Handler
app.use(function (err, request, response, next) {
  response.status(err.status || 500);
});

// Serve app
const port = 8081;
app.listen(port, function() {
  console.log('Serving on localhost: ' + port);
});
