const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 2000, // your port no
  password: "",//here is your password
  database: "firstDb", // dbbase name
});

module.exports = client;
