var express           = require('express');
var router            = express.Router();

/* Catchall route that renders the application */
router.all('*', function(req, res) {
  res.render('index.html');
});

module.exports = router;
