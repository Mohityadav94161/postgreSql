const client = require("./database");
const express = require("express");
const app = express();
const table = 'myusers';//table name in which you wants to perform action

console.log(table);

app.listen(3001, () => {
  console.log("server is running on port : 3001");
});
client.connect();

app.get("/user", (req, res) => {
  client.query(`select * from ${table}`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.get("/user/:id", (req, res) => {
  client.query(
    `select * from ${table} where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      } else {
        res.send("there is some err " + err);
      }
    }
  );
  client.end;
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  const user = req.body;
  console.log(user);
  let insertQuery = `insert into ${table} (name,address ,phno ,id) 
                    values('${user.name}','${user.address}' , '${user.phno}' ,${user.id})`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("insertion successful");
    } else {
      res.send("there is some errr in insertion error: " + err);
      console.log(err.message); 
    }
  });
  client.end;
});

app.put

