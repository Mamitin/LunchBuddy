const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// const bodyParser = require('body-parser');
// const morgan = require('morgan');
const session = require('express-session');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// app.post("/api/lunches", function(req, res) {
//   console.log(req);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://lunchbuddy:lunchbuddy2@ds359298.mlab.com:59298/heroku_7bjb6l4s");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});