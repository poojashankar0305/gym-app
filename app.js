var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var loginRouter = require('./routes/loginRoute');
var superAdminRouter = require('./routes/superAdmin');

dotenv.config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(`${process.env.VERSION}users`, usersRouter);

app.use(process.env.VERSION, loginRouter);
app.use(`${process.env.VERSION}super-admin/`, superAdminRouter);

module.exports = app;
