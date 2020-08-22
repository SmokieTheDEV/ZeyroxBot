const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Please Give the Suggestion");
    }

    let channel = message.guild.channels.cache.find(x => x.name === "suggestion" || x.name === "suggestions");

    if (!channel) {
      return message.channel.send("there is no channel with name - suggestions");
    }

    let embed = new MessageEmbed()
      .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setDescription(args.join(" "))
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    message.channel.send("Sent Your Suggestion to " + `${channel}`);
    
    message.delete()
    
  }
};
