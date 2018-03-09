// Packages
const path = require('path');
const fs = require('fs');
const express = require('express');

// Imports
const indexRoutes = require('./routes/index')
const errRoutes = require('./routes/err')
const aboutRoutes = require('./routes/about')
const loginRoutes = require('./routes/login')
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

app.get('/about', aboutRoutes);

app.get('/login', loginRoutes);

app.get('*', errRoutes);

// Error Handler
app.use(function (err, request, response, next) {
  response.status(err.status || 500);
});

// Serve app
module.exports = app;
