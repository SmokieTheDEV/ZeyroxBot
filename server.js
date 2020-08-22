const { prefix } = require("./config.json");
const { config } = require("dotenv");
const db =require("quick.db");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
require("./music.js");

require("./uptime.js");

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(` ${client.user.username} is turned on`);
  client.user.setActivity(`https://.smokie\zeyrox.com`,{type:"STREAMING"});
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${prefix}\``);
  }

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});


client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }
  
  let default_url = `https://cdn.discordapp.com/attachments/696417925418057789/716197399336583178/giphy.gif`
  
  let default_msg = `━━━━━━━━━━━━━━━━━━━━━━━━
  | WELCOME ${member} TO ${member.guild}
        
━━━━━━━━━━━━━━━━━━━━━━━━
 | BE SURE THAT YOU HAVE READ    
           |RULES
━━━━━━━━━━━━━━━━━━━━━━━━
 | USERNAME ${member.username}  
|RANK is ${member.member_count}  ━━━━━━━━━━━━━━━━━━━━━━━━
 | YOU CAN ENJOY IN  CHATTING 
━━━━━━━━━━━━━━━━━━━━━━━━
            THANKS FOR JOINING US
`
  
  let m1 = db.get(`msg_${member.guild.id}`)

const msg = m1.replace("{member}", member.user).replace("{member.guild}", member.guild).replace("(:HEART)",`<a:BH:731369456634429493>`)

  
  let url = db.get(`url_${member.guild.id}`)
  if(url === null) url = default_url
  
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

  let wembed = new discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL({dynamic: true, size: 2048}))
  .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 2048}))
  .setColor("RANDOM")
  .setImage()
  .setDescription(msg);
  
  client.channels.cache.get(chx).send(wembed)
  client.channels.cache.get(chx).send(attachment)
})


client.login(process.env.TOKEN);