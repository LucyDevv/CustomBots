const Discord = require("discord.js"); // discord.js
const client = new Discord.Client(); // client.<etc>
const config = require("./config.json"); //config.<etc>

// setup
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`?help`)
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
  .setAuthor("ParasiteMC Bot", client.user.avatarURL)
  .setColor(0xd62e11)
  .setFooter("ParasiteMC Bot - Created by Lucy#4924")
  .setThumbnail(client.user.avatarURL)
  .setURL(" ")
  .addField("?help", "Shows you this help", true)
  .addField("?ping", "Pings the bot", true)
  .addField("?warn", "Warns the @user", true)
  .addField("?kick", "Kicks the @user", true)
  .addField("?ban", "Bans the @user", true)
  .addField("?mcbody", "Gets a users MC skin", true)
  .addField("?mchead", "Gets a users MC head", true)
  .addField("?mcavatar", "Gets a users MC avatar", true)
  .addField("?mcbust", "Gets a users MC bust", true)
  .addField("?prune", "Prunes <X> messages", true)

  msg.channel.send({embed});
  }
    // help
    // mc stuff
     if (msg.content.startsWith(config.prefix + 'mcavatar')) {
        const args = msg.content.split(' ').slice(1);
    const embed = new Discord.RichEmbed()
    embed.setAuthor(args, `https://crafatar.com/avatars/${args}`)
        embed.setImage(`https://visage.surgeplay.com/face/128/${args}.png`)
        msg.channel.send({embed});  
  }
    if (msg.content.startsWith(config.prefix + 'mcbust')) {
        const args = msg.content.split(' ').slice(1);
    const embed = new Discord.RichEmbed()
    embed.setAuthor(args, `https://crafatar.com/avatars/${args}`)
        embed.setImage(`https://visage.surgeplay.com/bust/128/${args}.png`)
        msg.channel.send({embed});  
  }
    if (msg.content.startsWith(config.prefix + 'mcbody')) {
        const args = msg.content.split(' ').slice(1);
    const embed = new Discord.RichEmbed()
    embed.setAuthor(args, `https://crafatar.com/avatars/${args}`)
        embed.setImage(`https://visage.surgeplay.com/full/${args}.png`)
        msg.channel.send({embed});  
  } 
    if (msg.content.startsWith(config.prefix + 'mchead')) {
        const args = msg.content.split(' ').slice(1);
    const embed = new Discord.RichEmbed()
    embed.setAuthor(args, `https://crafatar.com/avatars/${args}`)
        embed.setImage(`https://visage.surgeplay.com/head/128/${args}.png`)
        msg.channel.send({embed});  
  }
    // mc stuff
    // kick
        if(msg.content.startsWith(config.prefix + 'kick')) {
  let member2 = msg.mentions.members.first();
  let reason = msg.content.split(/\s+/g).slice(2).join(" ");
  member2.kick(reason);
            msg.channel.send({embed: {
  color: 0xd62e11,
  description: `<:tick:338960113648009216> **Done!**`
}});
  let logChannel = msg.guild.channels.find(channel => channel.name === 'logs');
                logChannel.send(`:hammer_pick: ${member2} was kicked for **${reason}**.`)
}
    // kick
    // ban
            if(msg.content.startsWith(config.prefix + 'ban')) {
  let member3 = msg.mentions.members.first();
  let reason1 = msg.content.split(/\s+/g).slice(2).join(" ");
  member3.ban(reason);
            msg.channel.send({embed: {
  color: 0xd62e11,
  description: `<:tick:338960113648009216> **Done!**`
}});
  let logChannel = msg.guild.channels.find(channel => channel.name === 'logs');
                logChannel.send(`:hammer_pick: ${member3} was banned for **${reason1}**.`)
}
    // ban
    // warn
            if(msg.content.startsWith(config.prefix + 'warn')) {
  let member4 = msg.mentions.members.first();
  let reason2 = msg.content.split(/\s+/g).slice(2).join(" ");
            msg.channel.send({embed: {
  color: 0xd62e11,
  description: `<:tick:338960113648009216> **Done!**`
}});
  let logChannel = msg.guild.channels.find(channel => channel.name === 'logs');
                logChannel.send(`:hammer_pick: ${member4} was warned for **${reason2}**.`)
}
    // warn
    // prune
    if(msg.content.startsWith(config.prefix + 'prune')) {
  let member5 = msg.author
  let amount = msg.content.split(' ').slice(1);
        msg.channel.bulkDelete(parseInt(amount));
            msg.channel.send({embed: {
  color: 0xd62e11,
  description: `<:tick:338960113648009216> **Done!**`
}});
  let logChannel = msg.guild.channels.find(channel => channel.name === 'logs');
                logChannel.send(`:hammer_pick: ${member5} cleared ${amount} messages.`)
}
    // prune
    
});

// welcomer
client.on("guildMemberAdd", (member) => {
    member.guild.defaultChannel.send({embed: {
  color: 0xd62e11,
  description: `Welcome to **ParasiteMC** ${member}! Make sure to check <#286222846831755265> and <#326087406543699968> for all the stuff you need to get a good start!`
}});
});
// welcomer
// logger
client.on('guildMemberAdd', User => {
  let theGuild = User.guild
  let logChannel = theGuild.channels.find(channel => channel.name === 'logs');
    if(!logChannel) {
        return;
    } else {
        logChannel.send("User Joined: " + User.tag + "\nID: " + User.id)
    }
});

client.on('guildMemberRemove', User => {
  let theGuild = User.guild
  let logChannel = theGuild.channels.find(channel => channel.name === 'logs');
    if(!logChannel) {
        return;
    } else {
        logChannel.send("User Left: " + User.tag + "\nID: " + User.id)
    }
});
//

client.login(config.token); // login