const { Client, Collection } = require('discord.js');
const client = new Client();
const { readdirSync } = require('fs');
const ascii = require("ascii-table");
const { prefix, token } = require('./Storage/config.json');

["commands", "aliases"].forEach(x => client[x] = new Collection());

["command", "event"].forEach(handler => { require(`./handlers/${handler}`)(client); });

client.login(token);