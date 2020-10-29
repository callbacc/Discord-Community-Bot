import MySQL from "mysql";
import("dotenv").config();


const conn = MySQL.createConnection({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password
})

const con = conn.connect;

module.exports = con;