const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
 if(message.content.indexOf(process.env.PREFIX) !== 0) return;

var request = require('request');

        var url = 'https://use.gameapis.net/mcpe/query/extensive/'+args[0]+":"+args[1]
        let res = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("MCPE Query Usage")
        .setFooter("Copyright of Fakea354 2.0 By Assassiner354")
        .setTimestamp()
        .addField("󠂪 󠂪󠂪 󠂪", "**query <server ip> <port>**\n 󠂪 󠂪󠂪 󠂪", true)
      if(!args[0]) return message.channel.send(res);
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('ERROR 404! Error getting MCPE server status');
            }

          body = JSON.parse(body);

let stat = body.status
if(!stat === "true") return message.channel.send("Offline");

          let query = new Discord.RichEmbed()
          .setColor("BLUE")
          .setTitle("MCPE Query Command")
          .setFooter("Copyright of Fakea354 2.0 By Assassiner354")
          .setTimestamp()
          .addField("🔒 IP ADDRESS", "```" + `${body.hostname}:${body.port}` + "```", true)
          .addField("💾 SOFTWARE", "```" + `${body.software}` + "```", true)
          .addField("🎉 MOTD", "```" + `${body.motd}` + "```", true)
          .addField("🎪 MAP", "```" + `${body.map}` + "```", true)
          .addField("💻 PLUGINS", "```" + `${body.plugins}` + "```", true)
          .addField("👦 PLAYER LIST", "```" + `${body.list}` +  "```", true)

          message.channel.send(query)
        });
}


module.exports.help = {
 name: "query"
}
