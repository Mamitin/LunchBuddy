const express = require("express");
const passport = require('./passport');
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

// app.set('trust proxy', 1) // trust first proxy
//sessions
app.use(
  session({
  secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
  resave: false, //required
  saveUninitialized: false //required

  })
)

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  next();
});


// app.post('/users', (req, res) => {
//   console.log('user signup');
//   req.session.username = req.body.username;
//   res.end()
// })

app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lunchbuddymongo");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});