var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var hbs = require('hbs');

var index = require('./routes/index');
var users = require('./routes/users');
var jewelry = require('./routes/jewelries');
var standars = require('./routes/standars');

var app = express();

//add partial views
hbs.registerPartials(__dirname + '/views');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(multer({dest:'./public/upload/temp'}).single('uploadfile'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname)));

//add path for upload image in jewelry/edit root
app.use('/jewelry/edit',express.static(path.join(__dirname)));


app.use('/', index);
app.use('/users', users);
app.use('/jewelry', jewelry);
app.use('/standars', standars);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
