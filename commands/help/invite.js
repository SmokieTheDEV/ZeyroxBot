const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE ZEYROX BOT",
  run: async (client, message, args) => {

    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<a:verify:743830477818953768>[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=730018265639682168&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY SMOKIE`)
    .setTimestamp(message.timestamp = Date.now())

    message.channel .send(embed)


  }
}
