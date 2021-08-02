const discord = require("discord.js");

module.exports = {
  name: "music",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT WILL SOON NEW FEATURES `)
      .setDescription(
        `
<a:visuals:743831283821707329>__**MUSIC COMMAND**__<a:visuals:743831283821707329>
<a:Right:743831162686013553>\`!!play\` :- give name of song or link
<a:Right:743831162686013553>\`!!search\` :- give title of song
<a:Right:743831162686013553>\`!!skip\`:- skip the song
<a:Right:743831162686013553>\`!!stop\` :- stop the song
<a:Right:743831162686013553>\`!!pause\`:- pause the song
<a:Right:743831162686013553>\`!!resume\`:- resume the song
<a:Right:743831162686013553>\`!!nowplaying\` :-  now playing songs
<a:Right:743831162686013553>\`!!queue\` :- give list of queue songs
<a:Right:743831162686013553>\`!!volume\` :- set volume 0 to 100

[__**Support Server**__](https://discord.gg/f2bCxD5)
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`BOT MADE BY LOVE BY SMOKIE `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

  }
};
