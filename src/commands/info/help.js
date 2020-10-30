const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["lag"],
    category: "Info",
    description: "Show's this page!",
    dev: false,
    checkArgs: args => !args.length,
    path: __filename,
    execute: async (client, message, args) => {
        let arr = [];

        client.commands.map(com => {
            arr.push(`\`${com.name} - ${com.description}\``);
        })

        const _ = new MessageEmbed()
            .setColor("151515")
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle("Help!")
            .setDescription(arr);

        message.channel.send(_);
    }
}