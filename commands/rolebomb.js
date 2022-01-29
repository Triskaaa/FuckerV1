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
  code: `$createRole[$getServerVar[rbomb];$randomText[#ff0000;#ff4d00;#f6ff00;#09ff00;#00ffce;#0097ff;#0900ff;#7f00ff;#e100ff;#ff00ae;#ff004c]]
  $suppressErrors`
}]
