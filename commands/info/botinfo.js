const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("> <a:PurpleFire:743831216188555385>BOT NAME<a:PurpleFire:743831216188555385>", `Zeyrox`)
      .addField(
        "> <a:PurpleFire:743831216188555385>BOT DEVELOPER<a:PurpleFire:743831216188555385> ",
        `
 <@551675716635328512> `
      )
      .addField(
        "> <a:PurpleFire:743831216188555385>TOTAL SERVER<a:PurpleFire:743831216188555385>",
       `${client.guilds.cache.size}`,
        true
      )
      .addField(
         "> <a:PurpleFire:743831216188555385>TOTAL CHANNAL<a:PurpleFire:743831216188555385>",
        `${client.channels.cache.size}`
      )
      .addField(
        "> <a:PurpleFire:743831216188555385>TOTAL USER<a:PurpleFire:743831216188555385>",
        `${client.users.cache.size}`,
        true
      )
      .addField("> <a:PurpleFire:743831216188555385>BOT LIBRARY<a:PurpleFire:743831216188555385>", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};
