const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let serverembed = new Discord.RichEmbed()
        .setTitle('PixelBE Server')
        .setDescription('Check PixelBE Discord Server [HERE](https://discord.gg/YCBhENw).\n\nVote for PixelBE [HERE](https://minecraftpocket-servers.com/server/79904/vote/).\n\nOur Store [HERE](https://pixelbe.buycraft.net)\n\nIP:pixelbe.cf\nPORT:25636')
        .setColor('RANDOM')
        .setFooter('Requested by ${message.author.tag}')
        return message.channel.send(serverembed);
}

module.exports.help = {
  name:"server"
}
