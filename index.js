 const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: "OTMxMjgxMzczMDExMDA1NDkw.YeCJXQ.3rDUmzhBQ-ZZeNPzqMcr_BNO0W8",
   prefix: "+"
 });

bot.onMessage() //enables bot to see messages (required for executing Commands)

bot.command({
  name: "ping", //command name
  code: `My Ping Is \`$ping ms\` ` //code to be executed when this command is called 
 });

bot.status({
  text: "Fuck3r Beta",
  type: "STREAMING",
  url: "https://twitch.tv/ninja",
  time: 12
})

bot.readyCommand({
    channel: "",
    code: `$log[Pret a fucker : $userTag[$clientID]]`
})

bot.variables({
  msg: ""
})

 bot.loadCommands(`./commands/`)

const keepAlive = require("./server");

keepAlive();
