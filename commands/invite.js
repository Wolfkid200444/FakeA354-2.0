const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let inviteembed = new Discord.RichEmbed()
      .setTitle('Discord Invite')
      .setDescription('Invite FakeA354 using this link [Invite me](https://discordapp.com/api/oauth2/authorize?client_id=505163391271436299&permissions=8&scope=bot)')
      .setColor('DARK')
      return message.channel.send(inviteembed);
}

module.exports.help = {
  name:"invite"
}
