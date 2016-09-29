var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');
var cheerio = require('cheerio');
var request = require('request');
var htmlparser = require('htmlparser2');


//passport configuration
var passportConfig = require('./authConfig').passportConfig;

var app = express();


app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ 
  secret: 'keyboard squirrel',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

//OAuth configuration
app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);
//API ROUTES 
app.get('/auth/facebook', passport.authenticate('facebook'));

//check to see req session?
app.get('/checkAuth', function(req, res){
  res.send(req.user);
});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3010/#/',
    failureRedirect: 'http://localhost:3010/'
  }));

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


app.listen('3010', function() {
  console.log('listening on port 3010!');
});

