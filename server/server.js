// Packages
const path = require('path');
const fs = require('fs');
const express = require('express');

// Imports
const indexRoutes = require('./routes/index')

// Create app
const app = express();

// View Engine
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

// Middleware
app.use(express.static(path.join(__dirname, '../static')));

// Routes
app.get('/', indexRoutes);

// Error Handler
app.use(function (err, request, response, next) {
  response.status(err.status || 500);
});

// Serve app
module.exports = app;
