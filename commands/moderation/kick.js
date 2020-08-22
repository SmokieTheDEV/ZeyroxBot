const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot whithout knowing anyone xD",
  usage: "kick <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]).user
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`You don't have enough powers to kick someone`)
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(`I don't have powers to kick someone`)
    
    if(!args[0]) return message.reply(`Please mention someone to kick`)
    
    if(!target) return message.reply(`I can't find that member`)
    
    if(target.roles.highest.position >= message.author.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`They have more power than you`)
    }
    
    if(target.id === message.author.id) return message.reply(`I can't kick you as you are the Boss`)
    
    if(target.kickable) {
      let embed = new discord.MessageEmbed()
      .setAuthor(target.username.tag, target.avatarURL({dynamic: true, size: 1024}))
      .setColor("RANDOM")
      .setDescription(
        `
**❯ User:** ${target}
**❯ Action:** Kick
**❯ Reason:** \`${reason || "No Reason Provided"}\``)
      
      message.channel.send(embed)
      
      target.kick()
      
    } else {
      return message.reply(`I can't kick them, make sure that my role is above of theirs`)
    }
    return undefined
  }
};