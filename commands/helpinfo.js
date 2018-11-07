const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpeinfombed = new Discord.RichEmbed()
      .setTitle('Info commands | prefix ? ')
      .setDescription('There is available commands for this Info \n``botinfo, changelog, invite, media, userinfo, server, serverinfo``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpeinfombed);
    
}
 
module.exports.help = {
  name: "help_info"
}
