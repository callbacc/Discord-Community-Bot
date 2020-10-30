const { readdirSync, readdir } = require("fs");
const ascii = require("ascii-table");
var count = 0;
let table = new ascii("Commands");
table.setHeading("Command", "Load status");
module.exports = (client) => {
    readdirSync("C:/Users/Alexa Matei/Desktop/Discord-Community-Bot/src/commands").forEach(dir => {
        const commands = readdirSync(`C:/Users/Alexa Matei/Desktop/Discord-Community-Bot/src/commands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, 'Loaded!');
                count++;
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString());
    console.log(`Loaded ${count} commands!`);
}