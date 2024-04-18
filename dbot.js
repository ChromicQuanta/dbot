const {Client, Intents} = require("discord.js")
//const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
const client = new Client({intents: []})
console.log("e")
client.on('ready', ()=>{
  console.log(client.user.tag)
})

client.login(process.env.CLIENT_TOKEN)
