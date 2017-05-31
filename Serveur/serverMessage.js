// TWITTER

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'SvttBYzaFzFHds4kU4sbsZt7w',
  consumer_secret: 'fZSxcHjdKMx1XMfvayxCyrCW35k00uJBoEB6i5s7XXXSAO8iuA',
  access_token_key: '839864785747513345-vx02sghQx8UUCZ2IxDM1DguyAWQxvFr',
  access_token_secret: 'Oyb5TULBT05dwy4RzhihUkr5eSsYNzqzItcXuVJg099gw'
});

client.post('statuses/update', {status: 'Salut Pénélope lescalope'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});




// FACEBOOK


var FB = require('fb');


FB.api('oauth/access_token', {
    client_id: '159106787941845',
    client_secret: '0aa11fc6f106d7c746a5a847d8d83b2e',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    var accessToken = res.access_token;
});



FB.setAccessToken('access_token');

var body = 'My first post using facebook-node-sdk';
FB.api('me/feed', 'post', { message: body}, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});



//NODEMAILER

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'everysendtest@gmail.com',
        pass: 'labfabschool'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Pénélope" <péné@lope.com>', // sender address
    to: 'everysendtest@gmail.com', // list of receivers
    subject: 'Pénélope', // Subject line
    text: 'On sest fait niqué François', // plain text body
  //  html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});




// SLACK

var slack = require('slack')

slack.api.test({hello:'world'}, console.log)
