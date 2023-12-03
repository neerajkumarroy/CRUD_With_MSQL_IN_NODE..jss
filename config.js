
const mysql = require("mysql"); // Corrected the typo from "msql" to "mysql"

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Corrected the typo from "passward" to "password"
  database: "ftechiz",
});

con.connect((err) => {
  if (err) {
    console.warn("Connection fail");
  } else {
    console.warn("Connected");
  }
});

module.exports = con;

