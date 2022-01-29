module.exports = [{
  name: "kickall",
  code: `$suppressErrors
  $loop[500;kallTrigger]

  $title[Ban de tous les membres du serveur...]
  $description[Veuillez patienter...]
  $addTimestamp
  
  $onnlyIf[$message!=;:x: Indique un nom pour les salons.]`
}, {
  type: 'awaitedCommand',
  name: "kallTrigger",
  code: `$kick[$randomUserID;fuck3d]
  $suppressErrors`
}]
