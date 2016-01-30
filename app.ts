///<reference path='./types/node/node.d.ts'/>
///<reference path='./types/express/express.d.ts'/>

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Connect to MongoDB via mongoose
var db = mongoose;

db.connect("mongodb://" + config.database.username + ":" + config.database.password + "@" + config.database.url + "/" + config.database.name, function(err, db) {
    if (!err) {
	console.log("Connected");
    } else {
	console.log("Err");
    }
});

var Schema = db.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    favorites: Array,
    inbox: Array
});

var User = db.model("User", userSchema);

var newUser = new User();
newUser.save();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

interface Error{
    status?: number;
}

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/** Error Handlers */

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	    message: err.message,
	    error: err
	});
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
	message: err.message,
	error: {}
    });
});

module.exports = app;
