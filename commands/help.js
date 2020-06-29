const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Help')
    .setColor(bot.color)
    .setDescription('This Help command is for you to understand the commands of the bot!')
    .addField('-addnewfile <name>', 'To make a new file to store your accounts example. Minecraft')
    .addField('-addalt <name> <email:pass>', 'To add the accounts to the file')
    .addField('-stock ', 'To see the stock of your files')
    .addField('-gen <name>', 'To send you a DM of the account details')
    .setFooter('Made by COOLEX')
    .setTimestamp()
       message.channel.send(embed) 
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}