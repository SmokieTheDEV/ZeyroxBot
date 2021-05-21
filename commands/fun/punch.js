const discord = require("discord.js");
const random = require("something-random-on-discord").Random

module.exports = {
  name: "punch",
  category: "fun",
  description: "Punch someone",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
     let data = await random.getAnimeImgURL("punch")
    message.channel.send(data)
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} punches ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
