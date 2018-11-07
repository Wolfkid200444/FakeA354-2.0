const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Ask a full question idiot!");
  let replies = ["Yes", "No", "I don't know", "Maybe", "Try again later", "Without a doubt", "Concentrate and ask again", "Signs point to yes", "Don't count on it"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ")
  
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF0000")
  .addField("Question:", question)
  .addField("Answer:", replies[result]);
  
  message.channel.send(ballembed);
  
}

module.exports.help = {
  name:"8ball"
}
  
