module.exports = [{
  name: "stop",
  code: `

$channelSendMessage[$channelID;{title:Arret Du Bot}{description:Mes commandes ne pourront pas etre utilisées dans les prochaine 60 secondes.}]`
}, {
  name: "stop",
  code: `$reboot[index.js]

$wait[3s]`
}]