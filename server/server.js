const createError = require("http-errors");
const logger = require("morgan");
// const cors = require("cors");
const path = require ('path')
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
//set default engine, and provide [handlebars as] extension
app.set("view engine", "handlebars");
app.use(bodyParser.json())

/*testing to see if bundle.js is being sent and yes it is
app.get('/mf', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client/public/bundle.js'))
})
*/

//serve static file for now
//express.static(path.resolve(__dirname,'../client/public'))
app.use(express.static(path.resolve(__dirname,'../client/public')))

// open up CORS
// app.use(cors());

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(logger("dev"));

// You can place your routes here, feel free to refactor:
const { example } = require("./routes/");
app.use("/api/example", example);
app.use('/', example);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  /*  this does not work with expres anymore apparantly --sujan
  res.render("error");
  */

  res.json({
    message: err.message,
    error: err
  });
  next();
});

module.exports = app;
