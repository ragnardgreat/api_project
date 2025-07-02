import Express from "express";
const router = Express();
import mysql2 from "mysql2";


const connection = mysql2.createConnection({
  host: "WINDOWS-3PN1LIC",
  user: "new_user",
  password: "password",
  database: "users_api",
  port: 3306,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
})


router.get("/users", (req, res) => {
  connection.query("select * from users", (err, result) => {
    if (err) console.log(err);
    res.send(result)
  })
})

router.post("/users/new", (req, res) => {
  const user = req.body;
  connection.query(`insert into table users(null,${user.name},${user.username},${user.password},${user.email})`, (err, result) => {
    if (err) res.status(500).send("An error occured");
    res.status(200);
    console.log("User Created")
  })
})

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  connection.query(`select * from users where id = ${id}`, (err, result) => {
    if (err) res.status(500).send("An error occured");
    res.send(result)
  })
})

router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  connection.query(`update users set ${user.type} = ${user.data} where id = ${id}`, (err, result) => {
    if (err) res.status(500).send("An error occured");
    res.status(204);
    console.log("User updated1")

  })
})

export default router