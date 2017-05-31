var Slack = require('slack-node');

webhookUri = "https://hooks.slack.com/services/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";

slack = new Slack();
slack.setWebhook(webhookUri);

exports.postStatus = postStatus;

function postStatus(message) {

slack.webhook({
  channel: "#penelope",
  username: "pénélope",
  text: message,
}, function(err, response) {
  console.log(response);
});
};
