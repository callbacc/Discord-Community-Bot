const Discord = require('discord.js');
const { prefix } = require('../Storage/config.json');

module.exports = client => {
    client.user.setPresence({ activity: { name: "little games :)" }, type: 'WATCHING' });
}
