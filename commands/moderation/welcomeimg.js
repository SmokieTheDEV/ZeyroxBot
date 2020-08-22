  
const db = require("quick.db")
const { url } = require("../../server.js")

module.exports = {
  name: "setwelcomeimg",
  aliases: ["setwimage", "setwimg", "setwelcomeimage"],
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have enough powers")
    }
    
      if(!args[0]) {
      return message.channel.send("Please give the link of the image")
    } 
    
    if(args[1]) {
      return message.channel.send("You can not set a double argument")
    }
    
    db.set(`url_${message.guild.id}`, args[0])
  await message.channel.send(`Welcome image seted to ${args[0]}`)
    
  }
}