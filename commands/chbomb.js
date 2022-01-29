module.exports = [{
  name: "chbomb",
  code: `$suppressErrors
  $loop[500;chbombTrigger]
  $setServerVar[chbomb;$message]

  $title[Création des salons...]
  $description[Veuillez patienter...]
  $addTimestamp
  
  $onlyIf[$message!=;:x: Indique un nom pour les salons.]`
}, {
  type: 'awaitedCommand',
  name: "chbombTrigger",
  code: `$createChannel[$getServerVar[chbomb];text;no;]
  $suppressErrors`
}]
