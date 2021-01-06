var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
const studentRouter = require('./routes/studentRoute');
const teacherRouter = require('./routes/teacherRoute');
const lessonRouter = require('./routes/lessonRoute');
const presenceRouter = require('./routes/presenceRoute');

const studentApiRouter = require('./routes/api/StudentApiRoute');
const teacherApiRouter = require('./routes/api/TeacherApiRoute');
const lessonApiRouter = require('./routes/api/LessonApiRoute');
const presenceApiRouter = require('./routes/api/PresenceApiRoute');

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/students', studentApiRouter);
app.use('/api/teachers', teacherApiRouter);
app.use('/api/lessons', lessonApiRouter);
app.use('/api/presences', presenceApiRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/presences', presenceRouter);
app.use('/lessons', lessonRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
