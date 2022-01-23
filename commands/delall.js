module.exports = [{
  name: "delall",
  code: `
  $loop[500;delalltrigger]

  $title[Suppression De Tous les Salons...]
  $description[Veuillez patienter...]
  $addTimestamp`
}, {
  type: 'awaitedCommand',
  name: "delalltrigger",
  code: `$deleteChannels[$randomChannelID]`
}]