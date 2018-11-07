const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
  let roll = [1,2,3,4,5,6]
  let result = Math.floor((Math.random() * roll.length));
  
  message.channel.send(result)
}

module.exports.help = {
  name: "roll"
}
 
