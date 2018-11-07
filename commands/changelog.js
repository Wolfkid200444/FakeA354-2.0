const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let changelogembed = new Discord.RichEmbed()
    .setTitle('FakeA354 2.0 Changelog')
    .setDescription('Check the updates of the bot')
    .addField('November 7', 'Creation of the bot')
    .setColor('#808000')
    .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(changelogembed);

}

module.exports.help = {
  name:"changelog"
}
