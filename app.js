// PACKAGES REQUIRED
const express = require('express');
// const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// ROUTES REQUIRED
const index = require('./routes/index');
const ingredients = require('./routes/ingredients');

// EXPRESS
const app = express();

// MONGOOSE CONFIG
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/foodtender', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', index);
app.use('/ingredients', ingredients);

// catch 404 and forward to error handler
<<<<<<< HEAD
app.use(function (req, res, next, err) {
  // res.json({ error: 'Not found' });
  err.status(404);
=======
app.use(function (req, res, next) {
  res.status(404);
  res.json({error: 'Page not Found'});
>>>>>>> 3a2d4bce8499c449dd3290ad7d8df120cbcd0e10
});

// NOTE: requires a views/error.ejs template
app.use(function (err, req, res, next) {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.json({error: 'Unexpected error'});
  }
});

module.exports = app;
