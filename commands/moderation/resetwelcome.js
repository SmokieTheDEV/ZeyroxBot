const db = require("quick.db")
const { url } = require("../../server.js")

module.exports = {
  name: "rsetwelcomeimg",
  aliases: ["rsetwimage", "rsetwimg", "resetwelcomeimage"],
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix")
    }
    
      db.delete(`url_${message.guild.id}`)
     return await message.channel.send("Reseted Welcome Image ✅")
    }
    
}