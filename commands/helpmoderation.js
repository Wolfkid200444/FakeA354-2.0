const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let helpmoderationembed = new Discord.RichEmbed()
      .setTitle('Moderation Commands | prefix ? ')
      .setDescription('There is available commands for MODERATION!\n ``report, kick, ban, purge``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpmoderationembed);
}
 
module.exports.help = {
  name: "help_moderation"
}
