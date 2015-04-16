var express = require('express');
var expressConfig = require('./config/express-config');

var app = express();
expressConfig.setup(app, express);

require('./routes/routes.js')(app);

module.exports = app;