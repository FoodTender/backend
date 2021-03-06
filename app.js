// PACKAGES REQUIRED
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const response = require('./helpers/response');
const configurePassport = require('./helpers/passport');

// ROUTES REQUIRED
const index = require('./routes/index');
const ingredients = require('./routes/ingredients');
const recipes = require('./routes/recipes');
const bookmarks = require('./routes/bookmarks');
const auth = require('./routes/auth');

// EXPRESS
const app = express();
dotenv.config();

// MONGOOSE CONFIG
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL]
}));

// SESSION
app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'garfield',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 10000
  }
}));

const passport = configurePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', index);
app.use('/auth', auth);
app.use('/', ingredients);
app.use('/', recipes);
app.use('/', bookmarks);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  response.notFound(req, res);
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    response.unexpectedError(req, res, err);
  }
});

module.exports = app;
