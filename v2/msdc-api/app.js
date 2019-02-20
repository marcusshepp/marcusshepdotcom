var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("successfully connected to the database");
}).catch(err => {
  console.log("could not connect to the database. exiting", err);
  process.exit();
});

// define a simple route
app.get('/', (req, res) => {
  res.json({ "message": "welcome fool" });
});

// requite notes routes
require('./app/routes/post.routes.js')(app);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
