const {Client, Intents, GatewayIntentBits} = require("discord.js")
const client = new Client({intents: [GatewayIntentBits.Guilds]})
//const client = new Client({intents: []})
console.log("e")
client.on('ready', ()=>{
  console.log(client.user.tag)
})

client.login(process.env.CLIENT_TOKEN)

client.on("messageCreate", msg=>{
  console.log("Message!")
  if(msg.content == "Shrek"){
    msg.reply("OLD Dick")
  }
})
