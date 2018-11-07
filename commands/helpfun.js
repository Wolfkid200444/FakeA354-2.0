const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let helpfunembed = new Discord.RichEmbed()
      .setTitle('Fun Commands | prefix ? ')
      .setDescription('There is available commands for FUN!\n ``avatar, gayrate, ping, favserver, 8ball, roll``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpfunembed);
      
}

module.exports.help = {
  name:"help_fun"
}
