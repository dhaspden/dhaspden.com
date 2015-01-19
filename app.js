var express = require('express');
var expressConfig = require('./config/express-config');

var app = express();
expressConfig.setup(app, express);

var routes = require('./routes/routes')(app, express);

module.exports = app;