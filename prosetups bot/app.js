const Discord = require("discord.js"); // discord.js
const client = new Discord.Client(); // client.<etc>
const config = require("./config.json"); //config.<etc>

// setup
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`-help`)
});
// setup

client.on('message', msg => { // check for msgs
    
    // ping
  if (msg.content.startsWith(config.prefix + `ping`)) {
    msg.channel.send({embed: {
  color: 0xd62e11,
  description: `:ping_pong: **Pong!** | *${client.ping}ms*`
}});
  }
    // ping
    // help
    if (msg.content.startsWith(config.prefix + `help`)) {
    const embed = new Discord.RichEmbed()
  .setAuthor("ProSetups", client.user.avatarURL)
  .setColor(0xd62e11)
  .setFooter("ProSetups Bot - Created by Lucy#4924")
  .setThumbnail(client.user.avatarURL)
  .setURL(" ")
  .addField("-help", "Shows you this help", true)
  .addField("-ping", "Pings the bot", true)

  msg.channel.send({embed});
  }
    // help
    
});

// welcomer
client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
   let wc = member.guild.channels.get('338924293117313024')
    
    const embed = new Discord.RichEmbed()
  .setTitle("ProSetups Public Discord")
  .setAuthor("ProSetups", client.user.avatarURL)
  .setColor(0xd62e11)
  .setDescription(`Hey ${member}, I'm the ProSetups Bot! Here are a few useful things
to keep in mind of!`)
  .setFooter("ProSetups Bot - Created by Lucy#4924")
  .setThumbnail(member.user.avatarURL)
  .setURL(" ")
  .addField("Want to order?", "If you want to purchase, PM @Tropical#9699 with all the details about what you need.", true)
    .addField("Have questions?", "If you have any questions, don't hesitate to ask in our #general-support text channel! There a Support Member will help you as quickly as possible.", true)
    .addField("Bot Infomation", "The ProSetups Bot's prefix is `-`, and you can get the full list of commands by using the command `-help`!", true)

  member.send({embed});
    
    wc.send({embed: {
  color: 0xd62e11,
  description: `:tada: Welcome, ${member} to ProSetups! If you need any help, PM **Tropical#9699**!`
}});
});
// welcomer

client.login(config.token); // login