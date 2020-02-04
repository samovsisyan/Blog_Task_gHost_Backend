const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const allowOrigin = require('./middleware/allowOrigin');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/comment', urlencodedParser, function (req, res) {
  res.send(req.body)
})

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


// app.use('/comment' , function (req, res) {
//   console.log(req.body);
//   res.end(JSON.stringify(req.body, {qs: "hello"}));
// })

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(allowOrigin);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Accept, Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PATCH, PUT, GET, DELETE, OPTIONS");
    return res.status(200).json({});
  }
});








// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('Error', {err});
  // res.json({
  //   status: 'error',
  //   message: err.message,
  //   errors: err.errors,
  // });
});

module.exports = app;

