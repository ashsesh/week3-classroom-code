const express = require('express')
const app = express()

var indexRouter = require('./routes/index');
var carsRouter = require('./routes/cars');
var landRouter = require('./routes/v2/land');

// Run with 'node app.js' - test
// See output with curl (in new terminal tab) or browser at http://localhost:3000/
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// Using express.Router to create mountable route handlers.
// https://expressjs.com/en/guide/routing.html
app.use('/', indexRouter);
app.use('/cars', carsRouter);
app.use('/v2/land', landRouter);


module.exports = app;
