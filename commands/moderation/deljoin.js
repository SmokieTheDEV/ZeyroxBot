// db.delete(`prefix_${message.guild.id}`)
//db.set(`prefix_${message.guild.id}`, args[0])
const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "delwelcome",
  aliases: ["deljoin", "delw"],
  category: "moderation",
  description: "Disable welcome message",
  run: async (client, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("You don't have enough powers");
    }
    
    db.delete(`join_${message.guild.id}`)
    message.channel.send('Disabled Welcome Message')
  }
}