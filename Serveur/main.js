var twitterMessage = require('./twitterMessage');
var nodemailerMessage = require('./nodemailerMessage');
var facebookMessage = require('./facebookMessage');
var slackMessage = require('./slackMessage');
var express = require('express');
var bodyParser = require("body-parser");

var server = express();



server.use(bodyParser.json() );       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(__dirname + '/../Client'));

server.post('/api/message', function(req, res) {
  var message = req.body.message;

  // TODO: add callbacks and send response only when message is sent on all plaforms
  twitterMessage.postStatus(message);
  nodemailerMessage.sendMail(message, message);
  facebookMessage.postStatus(message);
  slackMessage.postStatus(message);

  res.send('Message sent !');
});

server.listen(3001, function () {
  console.log('Amazing appli-messages is running on port 3001 !!!');
});
