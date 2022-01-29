module.exports = [{
  name: "rbomb",
  code: `$suppressErrors
  $loop[500;rbombTrigger]
  $setServerVar[rbomb;$message]

  $title[Création des roles...]
  $description[Veuillez patienter...]
  $addTimestamp
  
  $onlyIf[$message!=;:x: Indique un nom pour les roles.]`
}, {
  type: 'awaitedCommand',
  name: "rbombTrigger",
  code: `$createRole[$getServerVar[rbomb]random]
  $suppressErrors`
}]