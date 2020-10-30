const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: ["lag"],
    category: "Info",
    description: "Kicks an user.",
    dev: false,
    checkArgs: args => !args.length,
    path: __filename,
    execute: async (client, message, args) => {
        let userToBan = message.mentions.users.first() || client.users.resolve(args[0]);
        let reason = args.slice(1).join(" ");

        if(!message.member.permissions.has("BAN_MEMBERS")) return;

        if(!userToBan) return message.channel.send("You didn't mention anyone.");
        if(!reason) reason = "Default reason!";
    
        message.guild.members.ban(userToBan, { reason: reason });

        const _ = new MessageEmbed()
            .setColor("151515")
            .setAuthor(message.author)
            .setDescription(`Banned ${userToBan}`);
        message.channel.send(_)
    }
}