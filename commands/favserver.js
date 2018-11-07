const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let favserver = [' PixelBE', ' EncatedLandsBE', ' BrokenLens', ' Implader', ' NetherGames', ' HyperLands', ' MinePlex', ' The Hive', ' Lifeboat Network', ' InPvP', ' Niteplex', ' Hypixel', ' Cubecraft Games', ' EmeraldCraft', 'PocketIsland'];
        let really = [' HECK YEA!', ' HECK NO!', ' BOO!', 'Really nigga?', 'Fuc* you', ' Seriously?'];
        let result1 = Math.floor((Math.random() * favserver.length));
        let result2 = Math.floor((Math.random() * really.length));
        let favembed = new Discord.RichEmbed()
        .setDescription("Favorite Server")
        .addField(`What is your **FAVORITE** server on Minecraft: Bedrock Edition?`, `**${favserver[result1]}**`)
        .addField(`Seriously, user?`, `**${really[result2]}**`)
        .setColor('RANDOM')
        .setFooter(`Requested by ${message.author.tag}`)
        return message.channel.send(favembed);

}

module.exports.help = {
  name:"favserver"
}
