const Discord = require('discord.js');
const prefix = "."

module.exports = (client, message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
  
    if (message.author.bot || message.channel.type === 'dm') return;
  
    if (!client.commands.has(commandName)) return;
  
    const command = client.commands.get(commandName)
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error when running the command');
    } finally {
        console.log(`${message.author.username} ran the command: ${commandName}`);
    }
}