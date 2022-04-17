var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var yogurtRouter = require('./routes/yogurt');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var yogurt = require("./models/yogurt");

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await yogurt.deleteMany();
 
  let instance1 = new
 yogurt({yogurt_flavour:"Blueberry", yogurt_quantity:10, 
 yogurt_cost:50});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
 });
 
 let instance2 = new
 yogurt({yogurt_flavour:"Vanilla", yogurt_quantity:20, 
 yogurt_cost:25});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
 });
 
  let instance3 = new
 yogurt({yogurt_flavour:"Strawberry", yogurt_quantity:30, 
 yogurt_cost:150});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
 });
 }
 let reseed = true; 
if (reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/yogurt', yogurtRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
