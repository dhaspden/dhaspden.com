module.exports = function(app, express) {

  app.get('*', function(req, res) { 
    return res.render('index.html');
  });

};
