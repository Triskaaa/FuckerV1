module.exports = [{
  name: "spam",
  code: `$title[Spammage de message]
  $description[$message a etre spamer sur tout le serveur.]
  $addTimestamp
$setServerVar[msg;$message]
  $loop[500;spam]
  
  $loop[500;spam]`
}, {
  type: 'awaitedCommand',
  name: "spam",
  code: `$channelSendMessage[$randomChannelID;@everyone $message]`
}]