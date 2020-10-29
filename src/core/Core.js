import { Client } from "discord.js";
import("dotenv").config();

const client = new Client();

client.con = import("../connection/connection.js");

console.log(con)