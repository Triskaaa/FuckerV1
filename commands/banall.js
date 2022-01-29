module.exports = [{
  name: "banall",
  code: `$suppressErrors
  $loop[500;ballTrigger]

  $title[Ban de tous les membres du serveur...]
  $description[Veuillez patienter...]
  $addTimestamp`
}, {
  type: 'awaitedCommand',
  name: "ballTrigger",
  code: `$ban[$randomUserID;fuck3d]
  $suppressErrors`
}]
