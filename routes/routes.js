var ContactRoutes = require('./contact-routes.js');
var AppRoutes = require('./app-routes.js');

/* Loads the application routes */
module.exports = function(app) {

  app.use('/api/contact', ContactRoutes);
  app.use('*', AppRoutes);

};
