module.exports = function(app, express) {

  app.get('*', function(req, res) { 
    res.status(200).send('Success');
  });

};
