import Express from "express";
const itemsRouter = Express();
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

itemsRouter.get("/items", (req,res)=>{
    connection.query(`select * from items`, (err,result)=> {
    if (err) console.log(err);
    res.send(result)
  })
})




export default itemsRouter