const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of help commands | prefix ? ')
      .setDescription('There is available commands for this bot on list!')
      .addField(':newspaper: INFO', '9 commands available \n``help_info``')
      .addField(':hammer: MODERATION', '4 commands available \n``help_moderation``')
      .addField(':tada: FUN', '6 commands available \n``help_fun``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "help"
}
