///<reference path='../types/node/node.d.ts'/>
///<reference path='../types/express/express.d.ts'/>

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
