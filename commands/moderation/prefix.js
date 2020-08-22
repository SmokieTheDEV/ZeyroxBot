  
const db = require("quick.db")
const { default_prefix } = require("../../config.json")
let reset = { default_prefix }

module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("<a:crossWrongYou are not allowed or do not have permission to change prefix")
    }
    
    if(!args[0]) {
      return message.channel.send("Please give the prefix that you want to set")
    } 
    
    if(args[1]) {
      return message.channel.send("You can not set prefix a double argument")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters")
    }
    
    if(args.join("") === reset) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Reseted Prefix ✅")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Seted Bot Prefix to ${args[0]}`)
    
  }
}