var FB = require('fb');

FB.setAccessToken('EAAXk9wDDF1gBAIYoDIOX8etOwXJhzJ8vXNLnqZAU9FV61NefOMSMqHYkmgMGUmhR7XratUn6FSCRtCKyYSpcEVMZAN3YhxXJsrqTp7nd0wnjBdbk0oZBTNK06Y8AVBN7JUZBQZBRZBceT0fpmxHkzMgUZBGJW85AZBZCgWi6m2E8J2uvjt02vehreVXxMrrVGbATUEUJStPlZCWgZDZD');

exports.postStatus = postStatus;

function postStatus(message) {

  FB.api('me/feed', 'post', { message }, function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    console.log('Post Id: ' + res.id);
  });
}
