var nodemailer = require('nodemailer');
var account = require('./account.json');

/* Sets up the service to send outgoing email messages */
var transporter = nodemailer.createTransport({
  service: account.service,
  auth: {
    user: account.username,
    pass: account.password
  }
});

/* Sends an email with the given parameters */
transporter.sendEmail = function(email, subject, name, message) {
  transporter.sendMail({
    from: email,
    to: account.username,
    subject: subject,
    text: name + ': ' + message
  });
}

module.exports = transporter;