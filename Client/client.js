$( ".submit-btn" ).click( handleClick );

function handleClick() {
  var textValue = $( "#text" ).val();

  sendMessageToNodejs(textValue);
}

function sendMessageToNodejs(message) {
  $.ajax({
    type: "POST",
    url: "/api/message",
    data: JSON.stringify({ message: message }),
    contentType: "application/json; charset=utf-8",
    success: function(data) {
      $( "#text" ).val("");
      alert('Le message a bien été envoyé !');
    },
    failure: function(errMsg) {
      alert('Erreur lors de l\'envoi du message');
    }
  });
}
