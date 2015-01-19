var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

exports.setup = function(app, express) {

  app.set('views', path.join(__dirname + '/../public/dist/views'));
  app.engine('html', require('ejs').renderFile);
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname + '/../public')));

};