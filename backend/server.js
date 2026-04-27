const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "db",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

db.connect(() => console.log("DB connected"));

app.get("/api/users", (req, res) => {
  db.query("SELECT 1 as id, 'John' as name", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(5000, () => console.log("Backend running"));