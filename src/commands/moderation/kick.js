const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    aliases: ["lag"],
    category: "Info",
    description: "Kicks an user.",
    dev: false,
    checkArgs: args => !args.length,
    path: __filename,
    execute: async (client, message, args) => {
        let userToKick = message.mentions.users.first() || client.users.resolve(args[0]);
        let reason = args.slice(1).join(" ");

        if(!message.member.permissions.has("KICK_MEMBERS")) return;

        if(!userToKick) return message.channel.send("You didn't mention anyone.");
        if(!reason) reason = "Default reason!";
    
        message.guild.member(userToKick).kick(reason);

        const _ = new MessageEmbed()
            .setColor("151515")
            .setAuthor(message.author)
            .setDescription(`Kicked ${userToKick}`);
        message.channel.send(_)
    }
}