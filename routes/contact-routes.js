var express = require('express');
var router = express.Router();
var mailer = require('../config/mail-config');

/* Sends an email based on the contact form information */
router.post('/', function(req, res) {
  var body = req.body;
  var options = mailer.makeEmail(body.email, body.subject, body.name, body.message);
  res.status(200).send();
});

module.exports = router;