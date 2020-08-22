const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "HELP MENU {UPDATED}",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`<a:Star:743831190976594012>__**HELP MENU UPDATED**__<a:Star:743831190976594012>`)
      .setDescription(
        `<a:PurpleFire:743831216188555385> __**MODRATION COMMANDS**__<a:PurpleFire:743831216188555385>
<a:Right:743831162686013553>[__**CLICK HERE**__](https://github.com/SmokieTheDEV/ZeyroxBot/blob/master/Moderation.md)<a:Right:743831162686013553>

<a:PurpleFire:743831216188555385>__**INFORMATION COMMANDS**__<a:PurpleFire:743831216188555385>
<a:Right:743831162686013553>[__**CLICK HERE**__](https://github.com/SmokieTheDEV/ZeyroxBot/blob/master/Info.md)<a:Right:743831162686013553>

<a:PurpleFire:743831216188555385>__**MUSIC COMMANDS**__<a:PurpleFire:743831216188555385>
<a:Right:743831162686013553>[__**CLICK HERE**__](https://github.com/SmokieTheDEV/ZeyroxBot/blob/master/Music.md)<a:Right:743831162686013553>

<a:PurpleFire:743831216188555385>__**NSFW COMMANDS**__<a:PurpleFire:743831216188555385>
<a:Right:743831162686013553>[__**CLICK HERE**__](https://github.com/SmokieTheDEV/ZeyroxBot/blob/master/NSFW.md)<a:Right:743831162686013553>

<a:PurpleFire:743831216188555385>__**FUN COMMANDS**__<a:PurpleFire:743831216188555385>
<a:Right:743831162686013553>[__**CLICK HERE**__](https://github.com/SmokieTheDEV/ZeyroxBot/blob/master/Fun.md)<a:Right:743831162686013553>

<a:PurpleFire:743831216188555385>__**SPECIAL COMMANDS**__<a:PurpleFire:743831216188555385>
<a:Right:743831162686013553>[__**CLICK HERE**__](https://github.com/SmokieTheDEV/ZeyroxBot/blob/master/Specialcommands.md)<a:Right:743831162686013553>

<a:PurpleFire:743831216188555385>__**WELCOME COMMANDS**__<a:PurpleFire:743831216188555385>
<a:Right:743831162686013553>[__**CLICK HERE**__](https://github.com/SmokieTheDEV/ZeyroxBot/blob/master/Welcome.md)<a:Right:743831162686013553>`
      )

      .setColor("RANDOM")
      .setFooter(`BOT MADE BY SMOKIE`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
