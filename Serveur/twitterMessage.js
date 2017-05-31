var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'SvttBYzaFzFHds4kU4sbsZt7w',
  consumer_secret: 'fZSxcHjdKMx1XMfvayxCyrCW35k00uJBoEB6i5s7XXXSAO8iuA',
  access_token_key: '839864785747513345-vx02sghQx8UUCZ2IxDM1DguyAWQxvFr',
  access_token_secret: 'Oyb5TULBT05dwy4RzhihUkr5eSsYNzqzItcXuVJg099gw'
});

exports.postStatus = postStatus;

function postStatus(message) {
  client.post('statuses/update', { status: message }, function(error, tweet, response) {
    if (error) {
      console.log('Error posting tweet:', error);
    }
    else {
      console.log('Tweet successfully posted');
    }
  });
}